/**
 * types
 */
import { ResponseSuccess } from "./type"

export const successData: ResponseSuccess = {
  status: "success",
  data: {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "田中太郎",
    profile_image: "http://via.placeholder.com/150x150",
    permissions: {
      is_admin: true,
      is_editor: true,
      is_analyzer: true,
    },
  },
}
