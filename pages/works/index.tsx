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
        <Text as="h2" className="subtitle">
          Coster V.3
        </Text>
        <Text as="p" className="desc">
          Coster is a <i>Software as a Service</i> (SaaS) which help a company
          having better communication with their customer. With Coster, user can
          communicate with their customer through multi channel like WhatsApp,
          Email, Instagram, etc in a single platform. Coster consist of 4 sub
          applications, we named them accounts, helpdesk, broadcast, and chatbot
          which are independent but can work together to achieve its purpose.
        </Text>
        <Text as="p" className="desc">
          I&apos;m the main Front End developer of this product and built it
          from 0 to a fully functional application. The frontend application use
          React, Node JS (as proxy), and Typescript as their core technology.
        </Text>
        <Grid>
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
        </Grid>
      </Container>
      <Container as="section" className="project">
        <Text as="h2" className="subtitle">
          Coster V.2
        </Text>
        <Text as="p" className="desc">
          Coster V.2 is similar to Coster V.3 but its an On-Premise application
          with lesser and smaller features. I did the Front End works on this
          product and built it from 0 to a fully functional application. The
          frontend application use Laravel (for proxying API request) and
          Vanilla JS as their core technology.
        </Text>
        <Grid>
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
        </Grid>
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
    alt: "chart UI",
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

const Root = styled("div", {
  margin: "0 1rem",
  "& > .project": {
    marginBottom: "2rem",
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
