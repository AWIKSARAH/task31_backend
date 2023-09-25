import Comment from "../models/commentModel.js";
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} from "../errors.js";
import Blog from "../models/blogModel.js";

/**

* Create a new comment.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Response JSON object.
 
 */
export const createComment = async (req, res, next) => {
  const { text, blog } = req.body;
  const author = req.user._id;
  console.log("====================================");
  console.log(req.body, author);
  console.log("====================================");
  try {
    if (!author) {
      throw new UnauthorizedError("Missing author");
    }
    if (!text || !blog) {
      throw new BadRequestError("Missing comment text or blog ID");
    }

    const newComment = new Comment({
      text,
      author,
      blog,
    });

    const savedComment = await newComment.save();

    const associatedBlog = await Blog.findById(blog);
    if (!associatedBlog) {
      throw new NotFoundError("Blog not found");
    }

    associatedBlog.comments.push(savedComment);
    await associatedBlog.save();

    return res.status(201).json({ data: savedComment });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all comments.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Object} - Response JSON object.
 */
export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find().populate("author", "name");
    return res.status(200).json({ data: comments });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a comment.
 * @returns {Object} - Response JSON object.
 */
export const deleteComment = async (req, res, next) => {
  const commentId = req.params.id;

  try {
    const comment = await Comment.findByIdAndDelete(commentId);

    if (!comment) {
      throw new NotFoundError("Comment not found");
    }

    return res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    next(error);
  }
};

/**
 *
 * Sarah awik 9 - 16 -2023
 */
