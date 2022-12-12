import Link from "next/link"
import { VFC } from "react"
import styled from "styled-components"

type Props = {
  mode: "transparent" | "colored"
}
export const Logo: VFC<Props> = (props) => {
  const { mode } = props
  return (
    <Link href="/">
      <StyledLogo mode={mode}>CUBE</StyledLogo>
    </Link>
  )
}

const StyledLogo = styled.a<{ mode: "transparent" | "colored" }>`
  background-color: ${(props) =>
    props.mode === "transparent" ? props.mode : "#444"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 196px;
  height: 100%;
  font-size: 28px;
`
