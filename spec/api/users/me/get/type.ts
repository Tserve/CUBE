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
} from "../../../types/common"

/**
 * @typedef Permissions
 * @description 権限
 * @property is_admin - 管理者権限有無
 * @property is_editor - 編集者権限有無
 * @property is_analyzer - 分析者権限有無
 */
type Permissions = {
  is_admin: boolean
  is_editor: boolean
  is_analyzer: boolean
}

/**
 * @typedef Data
 * @description データ
 * @property id - ID
 * @property name - 氏名
 * @property profile_image - プロフィール画像
 * @property permissions - 権限
 */
export type Data = {
  id: string
  name: string
  profile_image: string
  permissions: Permissions
}

export type ResponseSuccess = ResponseStatusSuccess & {
  data: Data
}

/**
 * @typedef APIType
 * @description API定義
 */
export type APIType = APIDef<
  GET,
  ["admin", "api", "users", "me"],
  AnyObject,
  AnyObject,
  undefined,
  AnyObject,
  | ResponseDef<Success200, AgreedConverter<ResponseSuccess>>
  | ResponseDef<Error500, AgreedConverter<ResponseError>>
>
