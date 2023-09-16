import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController.js";

router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", categoryController.addCategory);
router.put("/:id", categoryController.editCategoryById);
router.delete("/:id", categoryController.deleteCategoryById);
export default router;



/**
 *
 * Sarah awik 9 - 16 -2023
 */
