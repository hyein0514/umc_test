import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

// 미션 도전 추가
export const addChallenge = async (data) => {
  try {
    const conn = await pool.getConnection();
    console.log(conn);

    if (data.store_id == "progress") {
      conn.release();
      return -1;
    }

    const [result] = await pool.query(
      "INSERT INTO member_mission (member_id,mission_id,status) VALUES (?,?,?);",
      [data.member_id, data.mission_id, data.status]
    );
    conn.release();
    return result[0];
  } catch (err) {
    console.error("Error acquiring connection:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};