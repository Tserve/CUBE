/**
 * types
 */
import { ResponseSuccess, ResponseError } from "./type"

export const successData: ResponseSuccess = {
  success: 1,
  file: {
    id: "550e8400-e29b-41d4-a716-446655440000",
    url: "https://picsum.photos/1000/300",
  },
}

export const failureData: ResponseError = {
  success: 0,
}
