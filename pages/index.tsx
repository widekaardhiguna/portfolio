import { Button, Container } from "components"
import { MainLayout } from "layouts"
import { styled } from "theme/config"
import { NextPageWithLayout } from "pages/_app"
import Link from "next/link"

const Root = styled("div", {
  padding: "1rem",
  height: "100%",
  display: "grid",
  alignItems: "center",
  "& .introduction": {
    fontSize: "2.5rem",
    fontWeight: "bold",
    lineHeight: 1.3,
    margin: "0 0 1rem 0",
  },
  "& .description": {
    fontSize: "1.2rem",
    maxWidth: "60ch",
    lineHeight: 1.6,
    margin: "0 0 3rem 0",
  },
})

const Home: NextPageWithLayout = () => {
  return (
    <Root as={Container}>
      <div>
        <p className="introduction">
          Hi, I’m Deka
          <br />
          Front End Developer
        </p>
        <p className="description">
          Experienced in building high quality and robust web app to help people
          solve their problem.
        </p>
        <Link href="/skills">
          <Button>SEE WHAT I&apos;M CAPABLE OF</Button>
        </Link>
      </div>
    </Root>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
