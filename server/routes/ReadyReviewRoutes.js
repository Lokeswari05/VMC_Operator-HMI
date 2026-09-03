import express from "express";
import { getReadyReview } from "../controller/ReadyReviewController.js";

const router = express.Router();

router.get("/", getReadyReview);

export default router