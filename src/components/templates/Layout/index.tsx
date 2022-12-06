import { ReactNode, VFC } from "react"
import { Header } from "../../Header"

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)
