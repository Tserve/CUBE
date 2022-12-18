import { NextPage } from "next/types"
import { PostHeader } from "../../components/PostHeader"
import { Layout } from "../../components/templates/Layout"
import { Container } from "../../components/templates/Layout/Container"
import { getPostBySlag, Post } from "../../libs/api"

type Props = Pick<
  Post,
  "title" | "publish" | "content" | "eyecatch" | "categories"
>
const Schedule: NextPage<Props> = (props) => {
  const { title, publish, content, eyecatch, categories } = props
  return (
    <Layout>
      <Container>
        <article>
          <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        </article>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const slug = "schedule"
  const post = await getPostBySlag(slug)
  console.log(post)

  return {
    props: {
      categories: post.categories,
      content: post.content,
      eyecatch: post.eyecatch,
      publish: post.publishDate,
      title: post.title,
    },
  }
}

export default Schedule
