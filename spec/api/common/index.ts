import { ResponseError } from "../types/common"

export const failureData: ResponseError = {
  status: "failure",
  error_code: "record_not_found",
  message: "パラメータが不正です。",
}
