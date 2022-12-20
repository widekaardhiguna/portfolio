import { Button, Text, Collapsed, Container, TitlePage } from "components"
import { MainLayout } from "layouts"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "theme/config"
import Image from "next/future/image"
import htmlLogo from "public/logo/html-logo.png"
import { IconBrandLinkedin, IconMail } from "@tabler/icons"

const Root = styled("div", {
  "& > .contact-desc": {
    fontSize: "1.1rem",
    marginBottom: "0.6rem",
  },
  "& > .contact-link": {
    fontSize: "0.95rem",
    marginBottom: "0.5rem",
  },
})

const Link = styled("a", {
  display: "flex",
  gap: "0.3rem",
  alignItems: "center",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
})

const Skills: NextPageWithLayout = () => {
  return (
    <Root as={Container}>
      <TitlePage title="Contact" />
      <Text as="p" className="contact-desc">
        You can reach me through these platform
      </Text>
      <Link
        className="contact-link"
        href="https://www.linkedin.com/in/wideka-ardhiguna-537b89192"
        target="_blank"
      >
        <IconBrandLinkedin />
        LinkedIn
      </Link>
      <Link className="contact-link" href="mailto:widekaardhiguna22@gmail.com">
        <IconMail />
        Email (widekaardhiguna22@gmail.com)
      </Link>
    </Root>
  )
}

Skills.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Skills
