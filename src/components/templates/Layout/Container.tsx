import React, { ReactNode, VFC } from "react"
import styled from "styled-components"
import { WIDTH } from "../../../styles/const"

type Props = {
  children: ReactNode
  large?: boolean
}

export const Container: VFC<Props> = (props) => {
  const { children, large = false } = props
  return <StyledContainer large={large}>{children}</StyledContainer>
}

const StyledContainer = styled.div<{ large: boolean }>`
  max-width: ${(props) =>
    props.large ? `${WIDTH.MAX}` : `${WIDTH.CONTAINER}`};
  margin: 0 auto;
`
