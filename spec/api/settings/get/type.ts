/**
 * types
 */
import { UniversalRecord } from "../../types/common"

/**
 * @typedef Segment
 * @description セグメント
 * @extends UniversalRecord
 * @property options - セグメントオプション
 */
type Segment = UniversalRecord & {
  options: UniversalRecord[]
}

/**
 * @typedef Reaction
 * @description
 * @extends UniversalRecord
 * @property is_enabled - リアクション可否フラグ
 */
type Reaction = UniversalRecord & {
  is_enabled: boolean
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
 * @property job_types - 職種
 * @property segments - 任意セグメント
 */
export type Data = {
  site_name: string
  site_logo: {
    id: string
    url: string
  }
  catch_phrase: string
  reaction_types: Reaction[]
  can_comment: boolean
  article_categories: UniversalRecord[]
  first_departments: UniversalRecord[]
  second_departments: UniversalRecord[]
  third_departments: UniversalRecord[]
  positions: UniversalRecord[]
  job_types: UniversalRecord[]
  segments: Segment[]
}
