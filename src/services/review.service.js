import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {} from "../dtos/review.dto";
import { addReview } from "../models/review.dao";

export const reviewService = async (body) => {
  const reviewData = await addReview({
    member_id: body.member_id,
    store_id: body.store_id,
    body: body.body,
    score: body.score,
  });
  //   없는 store_id 입력시 에러 처리 필요
  if (reviewData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  }
};