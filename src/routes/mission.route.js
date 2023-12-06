import express from "express";
import asyncHandler from "express-async-handler";

import { missionController } from "../controllers/mission.controller.js";

export const missionRouter = express.Router();

// 리뷰추가
missionRouter.post("/addChallenge", asyncHandler(missionController));