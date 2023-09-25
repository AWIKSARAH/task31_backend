import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema, model } = mongoose;

const blogSchema = new Schema({
  title: {
    type: "string",
    required: [true, "Please Enter a valid title "],
    maxLength: [25, "U can't exceed more than 25 characters"],
  },
  description: {
    type: String,
    required: [true, "Please Enter a Description"],
  },
  image: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    populate: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    populate: true,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      populate: true,
    },
  ],
});

blogSchema.plugin(mongoosePaginate);

blogSchema.pre("find", function (next) {
  this.populate("author", "name");
  this.populate("category", "name");
  //   this.populate("comments", "text author.name");
  next();
});

export default model("Blog", blogSchema);

/**
 *
 * Sarah awik 9 - 16 -2023
 */
