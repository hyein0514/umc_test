import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";

// review 추가
export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();
    console.log(conn);

    if (!data.store_id) {
      conn.release();
      return -1;
    }

    const [result] = await pool.query(
      "INSERT INTO review (member_id,store_id,body,score) VALUES (?,?,?,?);",
      [data.member_id, data.store_id, data.body, data.score]
    );
    conn.release();
    return result[0];
  } catch (err) {
    console.error("Error acquiring connection:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};