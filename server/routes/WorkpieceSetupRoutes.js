import { confirmWorkpiece, getWorkpieceSetup } from "../controller/WorkpieceSetupController.js";
import express from "express";

const router = express.Router();

router.get("/", getWorkpieceSetup);
router.patch("/:id", confirmWorkpiece);

export default router