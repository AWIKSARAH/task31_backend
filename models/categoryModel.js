import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Should add a name for the Category"],
      unique: [true, "hoho"],
    },
  },
  {
    collection: "categories",
  }
);

const Category = model("Category", categorySchema);
export default Category;


/**
 *
 * Sarah awik 9 - 16 -2023
 */
