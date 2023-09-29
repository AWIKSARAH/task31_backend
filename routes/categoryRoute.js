import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController.js";
import auth from "../middleware/jwtAuthenticationMiddleware.js";
router.get("/", auth, categoryController.getCategories);
router.get("/:id", auth, categoryController.getCategoryById);
router.post("/", auth, categoryController.addCategory);
router.put("/:id", auth, categoryController.editCategoryById);
router.delete("/:id", auth, categoryController.deleteCategoryById);
export default router;

/**
 *
 * Sarah awik 9 - 16 -2023
 */
