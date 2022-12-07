import Image from "next/image"
import Link from "next/link"
import { VFC } from "react"
import styled from "styled-components"

type Article = {
  id: string
  thumbnailUrl: string
  title: string
  url: string
}

export const ArticleList: VFC = () => {
  const articles: Article[] = [
    {
      id: "1",
      thumbnailUrl: "/images/demo/image1.png",
      title: "1",
      url: "/article/1",
    },
    {
      id: "2",
      thumbnailUrl: "/images/demo/image2.png",
      title: "2",
      url: "/article/2",
    },
    {
      id: "3",
      thumbnailUrl: "/images/demo/image3.png",
      title: "1",
      url: "/article/2",
    },
    {
      id: "4",
      thumbnailUrl: "/images/demo/image4.png",
      title: "1",
      url: "/article/2",
    },
  ]
  return (
    <StyledArticleList>
      {articles.map(({ id, thumbnailUrl, title, url }) => (
        <StyledArticleItem key={id}>
          <Link href={url}>
            <StyledArticleCassette>
              <StyledArticleThumbnail>
                <Image
                  width={546}
                  height={352}
                  src={thumbnailUrl}
                  alt={title}
                />
              </StyledArticleThumbnail>
              <p>{title}</p>
            </StyledArticleCassette>
          </Link>
        </StyledArticleItem>
      ))}
    </StyledArticleList>
  )
}
const StyledArticleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledArticleItem = styled.li`
  margin-bottom: 55px;
`

const StyledArticleCassette = styled.a`
  width: 546px;
  display: block;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

const StyledArticleThumbnail = styled.p`
  width: 100%;
  max-height: 352px;

  img {
    width: 100%;
    height: auto;
  }
`
