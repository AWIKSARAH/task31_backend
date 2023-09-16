import express from "express";
import {
  createBlog,
  getBlogById,
  getAllBlog,
  countBlogsByCategory,
} from "../controllers/blogController.js";
import auth from "../middleware//jwtAuthenticationMiddleware.js";
import upload from "../middleware/imageHandlerMiddleware.js";
const router = express.Router();

router.post("/", auth, upload("blog"), createBlog);
router.get("/", auth, getAllBlog);
router.get("/count", auth, countBlogsByCategory);
router.get("/:id", auth, getBlogById);
export default router;

/**
 *
 * Sarah awik 9 - 16 -2023
 */
