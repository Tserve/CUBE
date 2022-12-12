import Image from "next/image"
import { VFC } from "react"
import styled from "styled-components"
import { Hero } from "../../Hero"
import { Layout } from "../Layout"

export const AboutTemplate: VFC = () => (
  <Layout>
    <article>
      <Hero heroTitle="About" heroSubText="About development activities" />
      <Image src="/images/demo/about.jpg" width="1152" height="576" />
      <StyledArticleContainer>
        <StyledArticle>
          <p>
            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
          </p>
          <section>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </section>
        </StyledArticle>
        <StyledAsideContact>vhj</StyledAsideContact>
      </StyledArticleContainer>
    </article>
  </Layout>
)

const StyledArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0 90px;
`
const StyledAsideContact = styled.aside`
  min-width: 240px;
`

const StyledArticle = styled.div`
  max-width: 768px;

  * + * {
    margin-top: var(--stack-space, 1.5em);
  }

  h2,
  h3 {
    --stack-space: 2em;
  }

  h2 + *,
  h3 + * {
    --stack-space: 0.8em;
  }

  p {
    line-height: 1.8;
  }

  ul {
    padding: revert;
    list-style: revert;
  }
`
