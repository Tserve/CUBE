import axios from "axios"
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next/types"
import { VFC } from "react"
import { Layout } from "../../components/templates/Layout"

export type Todo = {
  userId: string
  id: number
  title: string
  completed: boolean
}

export const Post: VFC<Todo> = ({ id, title, userId, completed }) => (
  <Layout>{title}</Layout>
)

const getAllTodos = async (): Promise<Todo[]> => {
  const END_POINT = "https://jsonplaceholder.typicode.com/todos?userId=1"
  return axios.get<Todo[]>(END_POINT).then((response) => response.data)
}

// first
export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const todos = await getAllTodos()
  const paths = todos.map((todo) => todo.id)
  return {
    paths,
    fallback: false,
  }
}

// second
export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  console.log(params)
  // Fetch necessary data for the blog post using params.id
  const END_POINT = `https://jsonplaceholder.typicode.com/todos?userId=1&id=${params?.id}`

  const todo = await axios
    .get<Todo[]>(END_POINT)
    .then((response) => response.data)

  return {
    props: {
      id: todo[0].id,
      userId: todo[0].userId,
      completed: todo[0].completed,
    },
  }
}
