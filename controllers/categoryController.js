import mongoose from "mongoose";
import Category from "../models/categoryModel.js";

/**
 * Get all categories from categories collection.
 */
export const getCategories = async (req, res, next) => {
  try {
    const response = await Category.find({});
    res.status(200).send({ success: true, response });
  } catch (error) {
    next(error.message);
  }
};

/**
 * Get a category by its ID.
 */
export const getCategoryById = async (req, res, next) => {
  try {
    const response = await Category.findOne({ _id: req.params.id });
    res.status(200).send({ success: true, response });
  } catch (error) {
    next(error);
  }
};

/**
 * Add a new category to the categories collection.
 * It returns an error if the name of the category is duplicate.
 */
export const addCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).send({ success: true, response: newCategory });
  } catch (error) {
    if (error.code === 11000) {
      // The category name already exists
      return res
        .status(400)
        .send({ success: false, message: "Category name already exists" });
    }
    next(error.message);
  }
};

/**
 * Edit a category by its ID.
 */
export const editCategoryById = async (req, res, next) => {
  try {
    const response = await Category.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).send({ success: true, message: "Done!" });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a category by its ID.
 */
export const deleteCategoryById = async (req, res, next) => {
  try {
    const response = await Category.findByIdAndDelete(req.params.id);
    res.status(200).send({ success: true, response });
  } catch (error) {
    next(error);
  }
};

export default {
  getCategories,
  getCategoryById,
  addCategory,
  editCategoryById,
  deleteCategoryById,
};




/**
 *
 * Sarah awik 9 - 16 -2023
 */
