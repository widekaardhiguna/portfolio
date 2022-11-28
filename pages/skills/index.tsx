import { Button, Text, Collapsed } from "components"
import { MainLayout } from "layouts"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "theme/config"
import Image from "next/future/image"
import htmlLogo from "public/html-logo.png"
import cssLogo from "public/css-logo.png"
import jsLogo from "public/js-logo.png"
import tsLogo from "public/ts-logo.png"
import nodeLogo from "public/node-logo.png"

const Root = styled("div", {
  paddingTop: "6rem",
  "& > .title": {
    textAlign: "center",
  },
  "& > .title-description": {
    textAlign: "center",
    marginTop: 0,
    marginBottom: "2em",
  },
  "& > .skills": {
    "& > .skill-section": {
      fontSize: "1.3rem",
      paddingLeft: "1rem",
      marginBottom: "0.5rem",
    },
  },
})

const BodyWrapper = styled("div", {
  padding: "0.5rem 1rem",
  fontSize: "0.925rem",
})

const Home: NextPageWithLayout = () => {
  return (
    <Root>
      <Text as="h1" className="title">
        Skills
      </Text>
      <Text as="p" className="title-description">
        Tools that I use often to support my work
      </Text>
      <section className="skills">
        <Text as="h2" className="skill-section">
          Fundamental
        </Text>
        <Collapsed
          title="HTML"
          icon={<Image src={htmlLogo} alt="html logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                This is the most basic skill which is required and cannot be
                avoided for anything related to web development. Hypertext
                Markup Language, a standardized system for tagging text files to
                achieve font, color, graphic, and hyperlink effects on World
                Wide Web pages.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="CSS"
          icon={<Image src={cssLogo} alt="CSS logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                CSS is a tool that I use extensively everyday for styling a
                website. Even though nowadays there are some alternative styling
                tools like Tailwind, it still is the most powerful and also
                offers the best flexibility among others.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Javascript"
          icon={<Image src={jsLogo} alt="JS logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Javascript is a tool to make the website more interactive, which
                can lead the website has better user experience. Lately I rarely
                use pure Javascript, instead I use Typescript because it offers
                better code quality and maintainability than Javascript.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Typescript"
          icon={<Image src={tsLogo} alt="TS logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Typescript is a basically an extension for Javascript. It offers
                better type system which will lead the code more robust and easy
                to be maintained. I use Typescript extensively for my work and I
                love it so much at a point I dont wanna go back to Javascript
                anymore if not being forced. This tool is my best friend when I
                build an complex and large scale application.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Node JS"
          icon={<Image src={nodeLogo} alt="Node JS logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Node JS is a tool mainly used to create a backend application,
                but some frontend developer also need it, includes me. I use
                Node JS to build a proxy for proxying request between frontend
                app and backend app. Some people also named the proxy
                {` "Backend for Frontend"`} if you are more familiar with that
                term. I often need to build that if the backend application use
                microservice as their architecure.
              </Text>
              <Text>
                I usually need to build a proxy if the backend application use
                microservice as their architecure. If the backend app is
                monolithic, most of the time a proxy is not needed to built .
              </Text>
            </BodyWrapper>
          }
        />
      </section>
    </Root>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
