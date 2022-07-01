import express from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createManyUsers,
} from "../controllers/users";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.post("/createManyUsers", createManyUsers);

export default router;
