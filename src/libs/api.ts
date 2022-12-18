import { createClient } from "microcms-js-sdk"

export type Post = {
  title: string
  publish: string
  content: string
  eyecatch: string
  subtitle: string
  categories: string[]
}
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export const getPostBySlag = async (slug: string): Promise<Post> => {
  const post = await client.get({
    endpoint: "blogs",
    queries: { filters: `slug[equals]${slug}` },
  })
  return post.contents[0]
}
