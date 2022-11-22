/**
 * node_modules
 */
import { POST, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"

/**
 * types
 */
import { AgreedConverter, AnyObject, EmptyObject } from "../../types/common"

/**
 * ============================== Request ==============================
 */

/**
 * @typedef RequestBody
 * @description リクエストボディ（実際はmultipart/form-dataでデータが送られてくる）
 */
type RequestBody = EmptyObject

/**
 * ============================== Response ==============================
 */

/**
 * @typedef ResponseFile
 * @description ファイル
 * @property id - ID
 * @property url - URL
 */
type ResponseFile = {
  id: string
  url: string
}

/**
 * @typedef ResponseSuccess
 * @description 正常パターンのレスポンス
 * @property success - 成功フラグ
 * @property file - ファイル
 */
export type ResponseSuccess = {
  success: 1
  file: ResponseFile
}

/**
 * @typedef ResponseError
 * @description エラーパターンのレスポンス
 * @property success - 成功フラグ
 */
export type ResponseError = {
  success: 0
}

/**
 * ============================== API type ==============================
 */

/**
 * @typedef APIType
 * @description API定義
 */
export type APIType = APIDef<
  POST,
  ["admin", "api", "images"],
  AnyObject,
  AnyObject,
  AgreedConverter<RequestBody>,
  AnyObject,
  | ResponseDef<Success200, AgreedConverter<ResponseSuccess>>
  | ResponseDef<Error500, AgreedConverter<ResponseError>>
>
