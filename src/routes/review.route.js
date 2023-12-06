import express from "express";
import asyncHandler from "express-async-handler";

import { reviewController } from "../controllers/review.controller.js";

export const reviewRouter = express.Router();

// 리뷰추가
reviewRouter.post("/add", asyncHandler(reviewController));