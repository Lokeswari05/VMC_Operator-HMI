import { confirmRequiredTool, getRequiredTool } from "../controller/RequiredToolController.js";
import express from "express";

const router = express.Router();

router.get("/", getRequiredTool);
router.patch("/:id", confirmRequiredTool);

export default router