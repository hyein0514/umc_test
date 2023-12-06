import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {} from "../dtos/mission.dto";
import { addChallenge } from "../models/mission.dao";

export const missionService = async (body) => {
  const missionData = await addChallenge({
    member_id: body.member_id,
    mission_id: body.mission_id,
    status: body.status,
  });
  //   없는 store_id 입력시 에러 처리 필요
  if (missionData == -1) {
    throw new BaseError(status.ALREADY_CHALLENGING);
  }
};