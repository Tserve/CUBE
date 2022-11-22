/**
 * node_modules
 */
import { PUT, APIDef, ResponseDef, Success200, Error500 } from "@agreed/typed"

/**
 * types
 */
import {
  AgreedConverter,
  ResponseStatusSuccess,
  ResponseError,
  AnyObject,
  UniversalRecord,
} from "../../types/common"

/**
 * ============================== Request ==============================
 */

/**
 * @typedef ReactionRequest
 * @description UniversalRecord にリアクション可否フラグを付与した型
 * @property is_enabled - リアクション可否フラグ
 */
type ReactionRequest = UniversalRecord & {
  is_enabled: boolean
}

/**
 * @typedef ItemRequest
 * @description UniversalRecord に削除フラグを付与した型
 * @property is_deleted - 削除フラグ
 * @property sort_order - 表示順
 */
type ItemRequest = UniversalRecord & {
  is_deleted: boolean
  sort_order: number
}

/**
 * @typedef Segment
 * @description セグメント
 * @property sort_order - 表示順
 * @property is_deleted - 削除フラグ
 * @property options - セグメントオプション
 */
type SegmentRequest = UniversalRecord & {
  sort_order: number
  is_deleted: boolean
  options: ItemRequest[]
}

/**
 * @typedef RequestBody
 * @description リクエストボディ
 * @property site_name - サイト名
 * @property site_logo_id - サイトロゴ
 * @property catch_phrase - キャッチフレーズ
 * @property can_comment - コメント可否フラグ
 * @property reaction_types - リアクション設定
 * @property article_categories - 記事カテゴリ
 * @property first_departments - 部署1
 * @property second_departments - 部署2
 * @property third_departments - 部署3
 * @property positions - 役職
 * @property job_types - 職種
 * @property segments - 任意セグメント
 */
type RequestBody = {
  site_name: string
  site_logo_id: string
  catch_phrase: string
  can_comment: boolean
  reaction_types: ReactionRequest[]
  article_categories: ItemRequest[]
  first_departments: ItemRequest[]
  second_departments: ItemRequest[]
  third_departments: ItemRequest[]
  positions: ItemRequest[]
  job_types: ItemRequest[]
  segments: SegmentRequest[]
}

/**
 * ============================== Response ==============================
 */

/**
 * @typedef Segment
 * @description セグメント
 * @property options - セグメントオプション
 */
type Segment = UniversalRecord & {
  options: UniversalRecord[]
}

/**
 * @typedef Data
 * @description データ
 * @property site_name - サイト名
 * @property site_logo - サイトロゴ画像
 * @property catch_phrase - キャッチフレーズ
 * @property reaction_types - リアクション設定
 * @property can_comment - コメント可否フラグ
 * @property article_categories - 記事カテゴリ
 * @property first_departments - 部署1
 * @property second_departments - 部署2
 * @property third_departments - 部署3
 * @property positions - 役職
 * @property segments - 任意セグメント
 */
type Data = {
  site_name: string
  site_logo: {
    id: string
    url: string
  }
  catch_phrase: string
  reaction_types: ReactionRequest[]
  can_comment: boolean
  article_categories: UniversalRecord[]
  first_departments: UniversalRecord[]
  second_departments: UniversalRecord[]
  third_departments: UniversalRecord[]
  positions: UniversalRecord[]
  segments: Segment[]
}

/**
 * @typedef ResponseSuccess
 * @description 正常パターンのレスポンス
 * @property data - データ
 */
export type ResponseSuccess = ResponseStatusSuccess & {
  data: Data
}

/**
 * ============================== API type ==============================
 */

/**
 * @typedef APIType
 * @description API定義
 */
export type APIType = APIDef<
  PUT,
  ["admin", "api", "settings"],
  AnyObject,
  AnyObject,
  AgreedConverter<RequestBody>,
  AnyObject,
  | ResponseDef<Success200, AgreedConverter<ResponseSuccess>>
  | ResponseDef<Error500, AgreedConverter<ResponseError>>
>
