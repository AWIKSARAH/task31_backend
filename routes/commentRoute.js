import express from "express";
import {
  createComment,
  getComments,
  deleteComment,
} from "../controllers/commentController.js";
import auth from "../middleware/jwtAuthenticationMiddleware.js";
const router = express.Router();


router.post("/", auth, createComment);
router.get("/", getComments);
router.delete("/", deleteComment);

export default router;

/**
 *
 * Sarah awik 9 - 16 -2023
 */
