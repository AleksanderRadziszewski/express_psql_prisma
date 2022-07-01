import express from "express";
import { createManyCars } from "../controllers/cars";

const router = express.Router();

router.post("/createManyCars", createManyCars);

export default router;
