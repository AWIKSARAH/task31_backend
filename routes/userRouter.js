import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updatePassword,
  getUser,
  login,
} from "../controllers/userController.js";
import auth from "../middleware/jwtAuthenticationMiddleware.js";
const router = express.Router();

router.post("/login", login);
router.get("/", auth, getUsers);
router.get("/:id", auth, getUser);
router.post("/", auth, createUser);

router.delete("/:id", auth, deleteUser);

router.patch("/profile", auth, updatePassword);

export default router;

/**
 *
 * Sarah awik 9 - 16 -2023
 */
