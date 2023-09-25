import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} from "../errors.js";

export const createBlog = async (req, res, next) => {
  const author = req.user._id;
  try {
    if (!author) {
      throw new UnauthorizedError("Missing author");
    }
    const newBlog = await Blog.create({ ...req.body, author });
    res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    next(new BadRequestError(error.message));
  }
};
export const getAllBlog = async (req, res, next) => {
  try {
    let filter = {};
    const options = {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
      populate: {
        path: "comments",
        populate: {
          path: "author",
          model: "Users",
        },
      },
    };

    const query = req.query.q;
    if (query) {
      const regex = new RegExp(query, "i");

      filter = {
        $or: [{ title: { $regex: regex } }, { description: { $regex: regex } }],
      };
    }

    const blogs = await Blog.paginate(filter, options);

    if (!blogs) {
      next(new NotFoundError("No Blogs Found!"));
    }
    res.status(201).json({ success: true, data: blogs });
  } catch (error) {
    next(new BadRequestError(error.message));
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate("author")
      .populate("category");

    if (!blog) {
      throw new NotFoundError("Blog not found");
    }

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

export const countBlogsByCategory = async (req, res, next) => {
  try {
    const categoryCounts = await Blog.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $addFields: {
          categoryName: { $arrayElemAt: ["$categoryDetails.name", 0] },
        },
      },
      {
        $project: {
          categoryDetails: 0,
        },
      },
      {
        $group: {
          _id: null,
          totalBlogs: { $sum: "$count" },
          categoryCounts: { $push: "$$ROOT" },
        },
      },
    ]);

    return res.status(200).json({ categoryCounts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 *
 * Sarah awik 9 - 16 -2023
 */
