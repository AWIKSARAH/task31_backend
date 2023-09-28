import express from "express";
import {
  createBlog,
  getBlogById,
  getAllBlog,
  countBlogsByCategory,
  getAllBlogsByAuthor,
} from "../controllers/blogController.js";
import auth from "../middleware//jwtAuthenticationMiddleware.js";
import upload from "../middleware/imageHandlerMiddleware.js";
const router = express.Router();

router.post("/", upload("blog"), createBlog);
router.get("/", getAllBlog);
router.get("/me", auth, getAllBlogsByAuthor);
router.get("/count", auth, countBlogsByCategory);
router.get("/:id", auth, getBlogById);
export default router;

/**
 *getAllBlogsByAuthor
 * Sarah awik 9 - 16 -2023
 */
