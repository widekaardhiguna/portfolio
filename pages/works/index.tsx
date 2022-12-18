import { Button, Text, Collapsed, Container } from "components"
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

const Works: NextPageWithLayout = () => {
  return (
    <Root>
      <Text as="h1" className="title">
        Works
      </Text>
      <Text as="p" className="title-description">
        Projects that I had experience with
      </Text>
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
          <div className="grid-item">
            <Image src={coster3chatting} alt="chatting UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3chart2} alt="chart UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3login} alt="login UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3chart} alt="chart UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3user} alt="user UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3ticket} alt="ticketing UI" />
          </div>
          <div className="grid-item">
            <Image src={coster3template} alt="create template UI" />
          </div>
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
          <div className="grid-item">
            <Image src={coster2report} alt="request report UI" />
          </div>
          <div className="grid-item">
            <Image src={coster2template} alt="create template UI" />
          </div>
          <div className="grid-item">
            <Image src={coster2ticket} alt="ticket logo" />
          </div>
        </Grid>
      </Container>
    </Root>
  )
}

Works.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Works

const Root = styled("div", {
  margin: "0 1rem",
  paddingTop: "6rem",
  "& > .title": {
    textAlign: "center",
  },
  "& > .title-description": {
    textAlign: "center",
    marginTop: 0,
    marginBottom: "2em",
  },
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
  margin: "0 0rem",
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(4, 200px)",
  gap: "0.6rem",
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
        transform: "scale(1.1)",
      },
    },
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
})
