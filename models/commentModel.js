import mongoose from "mongoose";

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  text: {
    type: String,
    required: [true, "Please provide a comment text"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
});

const Comment = model("Comment", commentSchema);

export default Comment;

/**
 *
 * Sarah awik 9 - 16 -2023
 */
