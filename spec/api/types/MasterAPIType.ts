/**
 * node_modules
 */
import { GET, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"

/**
 * types
 */
import {
  AgreedConverter,
  ResponseStatusSuccess,
  ResponseError,
  AnyObject,
} from "./common"

/**
 * @typedef ResponseSuccess
 * @description 正常パターンのレスポンス
 * @property data - データ
 */
export type ResponseSuccess<T> = ResponseStatusSuccess & {
  data: T
}

/**
 * @typedef MasterAPIType
 * @description マスタ系のAPI定義
 */
export type MasterAPIType<T, U> = APIDef<
  GET,
  ["admin", "api", T],
  AnyObject,
  AnyObject,
  undefined,
  AnyObject,
  | ResponseDef<Success200, AgreedConverter<ResponseSuccess<U>>>
  | ResponseDef<Error500, AgreedConverter<ResponseError>>
>
