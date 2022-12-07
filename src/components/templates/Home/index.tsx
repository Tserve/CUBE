import { VFC } from "react"
import { Hero } from "../../Hero"
import { ArticleList } from "../ArticleList"
import { Layout } from "../Layout"

export const HomeTemplate: VFC = () => (
  <Layout>
    <Hero heroImageURL="images/demo/cube.png" />
    <ArticleList />
  </Layout>
)
