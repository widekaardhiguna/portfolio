import {
  Text,
  Container,
  TitlePage,
  DialogImage,
  DialogImageProps,
} from "components"
import { MainLayout } from "layouts"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "theme/config"
import Image from "next/future/image"

import coster3chart2 from "public/projects/coster_v3/chart_2.png"
import coster3chart from "public/projects/coster_v3/chart.png"
import coster3chatting from "public/projects/coster_v3/chatting.png"
import coster3login from "public/projects/coster_v3/login.png"
import coster3template from "public/projects/coster_v3/template.png"
import coster3ticket from "public/projects/coster_v3/ticket.png"
import coster3user from "public/projects/coster_v3/user-management.png"

import coster2template from "public/projects/coster_v2/template.png"
import coster2ticket from "public/projects/coster_v2/ticket.png"
import coster2report from "public/projects/coster_v2/report.png"

import chatbotStudioEditor from "public/projects/chatbot_studio/editor.png"
import chatbotStudioSimulator from "public/projects/chatbot_studio/simulator.png"
import chatbotStudioList from "public/projects/chatbot_studio/list.png"

import nonogramDifficulties from "public/projects/nonogram/difficulties.png"
import nonogramHome from "public/projects/nonogram/home.png"
import nonogramStage from "public/projects/nonogram/stage.png"

import { useState } from "react"

type ImageOptions = {
  alt: DialogImageProps["ImageProps"]["alt"]
  src: DialogImageProps["ImageProps"]["src"]
}
const Works: NextPageWithLayout = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [imageOptions, setImageOptions] = useState<ImageOptions>({
    alt: "",
    src: "",
  })

  return (
    <Root>
      <TitlePage
        title="Works"
        description="Projects that I had experience with"
      />
      <Container as="section" className="project">
        <ProjectTitle as="h2" className="subtitle">
          # Coster 3
        </ProjectTitle>
        <Text as="p" className="desc">
          Coster is a <i>Software as a Service</i> (SaaS) which help a company
          having better communication with their customer through multi channel
          like WhatsApp, Email, Instagram, etc in a single platform. Coster is a
          large application that splitted into several sub applications which
          are independent but can work together to achieve its purpose.
        </Text>
        <Text as="p" className="desc">
          I&apos;m the Front End developer of this product and built it from 0
          to a fully functional application. The frontend application use React,
          Node JS (as proxy), and Typescript as their core technology.
        </Text>
        <Grid6>
          {costerV3Images.map((row) => (
            <div className="grid-item" key={row.alt}>
              <Image
                src={row.src}
                alt={row.alt}
                onClick={() => {
                  setShowDialog(true)
                  setImageOptions({
                    src: row.src,
                    alt: row.alt,
                  })
                }}
              />
            </div>
          ))}
        </Grid6>
      </Container>
      <Container as="section" className="project">
        <ProjectTitle as="h2" className="subtitle">
          # Chatbot Studio
        </ProjectTitle>
        <Text as="p" className="desc">
          Chatbot Studio is a web application designed to facilitate the
          creation of conversational flows between customer service
          representatives and their clients. Prior to being routed to the
          customer service team, incoming tickets undergo initial processing by
          the chatbot, thereby significantly alleviating the workload on the
          customer service staff.
        </Text>
        <Text as="p" className="desc">
          I&apos;m the Front End developer of this product. The frontend
          application was made using React, Node JS (as proxy), and Typescript
          as their core technology.
        </Text>
        <Grid3>
          {chatbotStudioImages.map((row) => (
            <div className="grid-item" key={row.alt}>
              <Image
                src={row.src}
                alt={row.alt}
                onClick={() => {
                  setShowDialog(true)
                  setImageOptions({
                    src: row.src,
                    alt: row.alt,
                  })
                }}
              />
            </div>
          ))}
        </Grid3>
      </Container>
      <Container as="section" className="project">
        <ProjectTitle as="h2" className="subtitle">
          # Nonogram
        </ProjectTitle>
        <Text as="p" className="desc">
          A Nonogram, also known as Picross or Griddlers, is a puzzle game where
          players fill in cells on a grid based on numerical clues. The clues
          indicate the sequence of filled cells in each row and column,
          challenging players to use deductive reasoning to complete the grid
          and uncover the image. You can play the game through this link{" "}
          <a href="https://nono-gram.vercel.app/" target="_blank">
            https://nono-gram.vercel.app
          </a>
          .
        </Text>
        <Text as="p" className="desc">
          This is a my personal project I’m currently working in alone and it is
          still in development stage, so there still a lot of thing need to be
          polished. The app/game is fully operated at client side with no
          backend. The app was made using React, Next JS, and Typescript as
          their core technology.
        </Text>
        <Grid3>
          {nonogramImages.map((row) => (
            <div className="grid-item" key={row.alt}>
              <Image
                src={row.src}
                alt={row.alt}
                onClick={() => {
                  setShowDialog(true)
                  setImageOptions({
                    src: row.src,
                    alt: row.alt,
                  })
                }}
              />
            </div>
          ))}
        </Grid3>
      </Container>
      <Container as="section" className="project">
        <ProjectTitle as="h2" className="subtitle">
          # Coster 2
        </ProjectTitle>
        <Text as="p" className="desc">
          Coster 2 is similar to Coster 3 but its an On-Premise application with
          lesser and smaller features. I did the Front End works on this product
          and built it from 0 to a fully functional application. The frontend
          application use Laravel (for proxying API request) and Vanilla JS as
          their core technology.
        </Text>
        <Grid3>
          {costerV2Images.map((row) => (
            <div className="grid-item" key={row.alt}>
              <Image
                src={row.src}
                alt={row.alt}
                onClick={() => {
                  setShowDialog(true)
                  setImageOptions({
                    src: row.src,
                    alt: row.alt,
                  })
                }}
              />
            </div>
          ))}
        </Grid3>
      </Container>
      <DialogImage
        open={showDialog}
        onOpenChange={(val) => setShowDialog(val)}
        ImageProps={{
          src: imageOptions.src,
          alt: imageOptions.alt,
        }}
      />
    </Root>
  )
}

Works.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Works

const costerV3Images = [
  {
    src: coster3chatting,
    alt: "chatting UI",
  },
  {
    src: coster3chart2,
    alt: "chart 2 UI",
  },
  {
    src: coster3login,
    alt: "login UI",
  },
  {
    src: coster3chart,
    alt: "chart UI",
  },
  {
    src: coster3user,
    alt: "user UI",
  },
  {
    src: coster3ticket,
    alt: "ticketing UI",
  },
  {
    src: coster3template,
    alt: "create template UI",
  },
]

const costerV2Images = [
  {
    src: coster2report,
    alt: "request report UI",
  },
  {
    src: coster2template,
    alt: "create template UI",
  },
  {
    src: coster2ticket,
    alt: "ticket logo",
  },
]

const chatbotStudioImages = [
  {
    src: chatbotStudioEditor,
    alt: "bot editor UI",
  },
  {
    src: chatbotStudioSimulator,
    alt: "bot simulator UI",
  },
  {
    src: chatbotStudioList,
    alt: "bot list UI",
  },
]

const nonogramImages = [
  {
    src: nonogramHome,
    alt: "nonogram home UI",
  },
  {
    src: nonogramStage,
    alt: "nonogram stage UI",
  },
  {
    src: nonogramDifficulties,
    alt: "nonogram difficulties UI",
  },
]

const ProjectTitle = styled(Text, {
  marginBottom: "0.5rem",
})

const Root = styled("div", {
  margin: "0 1rem",
  "& > .project": {
    marginBottom: "4rem",
    "& > .subtitle": {
      fontSize: "1.4rem",
    },
    "& > .desc": {
      fontSize: "0.9rem",
      marginBottom: "0.4rem",
    },
  },
})

const Grid = styled("div", {
  display: "grid",
  gap: "0.6rem",
  gridTemplateColumns: "repeat(2, 1fr)",
  "& > .grid-item": {
    borderRadius: "5px",
    overflow: "hidden",
    "& > img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      transition: "transform .25s, visibility .25s ease-in",
      filter: "brightness(50%)",
      "&:hover": {
        cursor: "pointer",
        transform: "scale(1.1)",
      },
    },
  },
})

const Grid3 = styled(Grid, {
  "@sm": {
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(4, 200px)",
    "& > .grid-item": {
      "&:nth-child(1)": {
        gridColumn: "1/7",
        gridRow: "1/3",
      },
      "&:nth-child(2)": {
        gridColumn: "span 3",
        gridRow: "span 2",
      },
      "&:nth-child(3)": {
        gridColumn: "span 3",
        gridRow: "span 2",
      },
    },
  },
})

const Grid6 = styled(Grid, {
  "@sm": {
    gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateRows: "repeat(4, 200px)",
    "& > .grid-item": {
      "&:nth-child(1)": {
        gridColumn: "1/5",
        gridRow: "1/3",
      },
      "&:nth-child(2)": {
        gridColumn: "span 2",
      },
      "&:nth-child(3)": {
        gridColumn: "span 2",
      },
      "&:nth-child(6)": {
        gridColumn: "span 2",
      },
      "&:nth-child(7)": {
        gridColumn: "3/-1",
        gridRow: "3/-1",
      },
    },
  },
})
