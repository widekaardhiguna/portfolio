import { Button, Text, Collapsed } from "components"
import { MainLayout } from "layouts"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "theme/config"
import Image from "next/future/image"
import htmlLogo from "public/logo/html-logo.png"
import cssLogo from "public/logo/css-logo.png"
import jsLogo from "public/logo/js-logo.png"
import tsLogo from "public/logo/ts-logo.png"
import nodeLogo from "public/logo/node-logo.png"
import reactLogo from "public/logo/react-logo.png"
import viteLogo from "public/logo/vite-logo.svg"
import zustandLogo from "public/logo/zustand-logo.png"
import muiLogo from "public/logo/mui-logo.svg"
import reactRouterLogo from "public/logo/react-router-logo.svg"
import reactQueryLogo from "public/logo/react-query-logo.svg"
import emotionLogo from "public/logo/emotion-logo.png"
import nextLogo from "public/logo/next-logo.png"
import expressLogo from "public/logo/express-logo.png"
import gitLogo from "public/logo/git-logo.png"
import githubLogo from "public/logo/github-logo.png"
import dockerLogo from "public/logo/docker-logo.png"

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
      marginTop: "0.8rem",
      marginBottom: "0.8rem",
    },
  },
})

const BodyWrapper = styled("div", {
  padding: "0.5rem 1rem",
  fontSize: "0.925rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
})

const List = styled("ul", {
  listStyleType: "none",
  margin: 0,
  paddingLeft: "0.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
  "& > li": {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },
})

const Skills: NextPageWithLayout = () => {
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
      <section className="skills">
        <Text as="h2" className="skill-section">
          Frameworks
        </Text>
        <Collapsed
          title="React"
          icon={<Image src={reactLogo} alt="react logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Probably my &quot;bread and butter&quot; skill when building web
                apps. A light library that suitable for small to complex
                application. Nowadays there are a lot of alternative that might
                seems easier than React, but I still think React is still the
                best in term of flexibility and it&apos;s huge ecosystem.
              </Text>
              <Text>
                React alone usually is not enough to build web apps, because
                it&apos;s just a small library by it self. Here are some of
                tools I usually use to support my React app :
              </Text>
              <List>
                <li>
                  <Image src={viteLogo} alt="vite logo" height="18" />
                  Vite
                </li>
                <li>
                  <Image
                    src={reactRouterLogo}
                    alt="react router logo"
                    height="18"
                    width="18"
                  />
                  React Router
                </li>
                <li>
                  <Image
                    src={reactQueryLogo}
                    alt="react query logo"
                    height="18"
                    width="18"
                  />
                  React Query
                </li>
                <li>
                  <Image
                    src={zustandLogo}
                    alt="zustand logo"
                    height="18"
                    width="18"
                  />
                  Zustand
                </li>
                <li>
                  <Image src={emotionLogo} alt="emotion logo" height="18" />
                  Emotion
                </li>
                <li>
                  <Image src={muiLogo} alt="material ui logo" height="18" />
                  Material UI
                </li>
              </List>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Next JS"
          icon={<Image src={nextLogo} alt="next js logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                A React Framework, suitable to build a more performant web apps
                because it&apos;s ability to SSR and CSR. Arguably has better
                developer experience than React, but less flexible because how
                opinionated it is. I use this instead of Vanilla React if better
                SEO is required for the website.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Express"
          icon={<Image src={expressLogo} alt="express logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Node JS Framework for more easier routing, middleware, error
                handling, etc. I usually use this to help building a proxy.
              </Text>
            </BodyWrapper>
          }
        />
      </section>
      <section className="skills">
        <Text as="h2" className="skill-section">
          Others
        </Text>
        <Collapsed
          title="Git"
          icon={<Image src={gitLogo} alt="git logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                A Tool used for versioning code. I use this extensively to
                manage the version of softwares that I build.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Github"
          icon={<Image src={githubLogo} alt="github logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Github is a platform for collaboration between developers.
                Github work hand in hand with Git. Working together as a team
                will be much easier with help from Github.
              </Text>
            </BodyWrapper>
          }
        />
        <Collapsed
          title="Docker"
          icon={<Image src={dockerLogo} alt="docker logo" height="24" />}
          body={
            <BodyWrapper>
              <Text>
                Docker is an open source platform for building, deploying, and
                managing containerized applications. I use docker to make my
                application more portable and easier to deploy.
              </Text>
            </BodyWrapper>
          }
        />
      </section>
    </Root>
  )
}

Skills.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Skills
