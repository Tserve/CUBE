import { VFC } from "react"
import { ArticleList } from "../../ArticleList"
import { Hero } from "../../Hero"
import { Layout } from "../Layout"

export const HomeTemplate: VFC = () => (
  <Layout>
    <Hero heroImageURL="images/demo/cube.png" />
    <ArticleList />
  </Layout>
)
