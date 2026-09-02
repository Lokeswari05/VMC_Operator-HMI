import express from "express"
import {confirmMachineCheck, getMachineChecks }from "../controller/MachineCheckController.js";

const router = express.Router();

router.get("/", getMachineChecks);
router.patch("/:id", confirmMachineCheck);

export default router 