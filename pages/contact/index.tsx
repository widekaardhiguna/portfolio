import { Text, Container, TitlePage } from "components"
import { MainLayout } from "layouts"
import { NextPageWithLayout } from "pages/_app"
import { styled } from "theme/config"
import { IconBrandLinkedin, IconMail } from "@tabler/icons"

const Skills: NextPageWithLayout = () => {
  return (
    <Root>
      <TitlePage title="Contact" />
      <Container className="contacts">
        <Text as="p" className="contact-desc">
          You can reach me through these platforms
        </Text>
        <Link
          className="contact-link"
          href="https://www.linkedin.com/in/wideka-ardhiguna-537b89192"
          target="_blank"
        >
          <IconBrandLinkedin />
          LinkedIn
        </Link>
        <Link
          className="contact-link"
          href="mailto:widekaardhiguna22@gmail.com"
        >
          <IconMail />
          Email (widekaardhiguna22@gmail.com)
        </Link>
      </Container>
    </Root>
  )
}

Skills.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Skills

const Root = styled("div", {
  margin: "0 1rem",
  "& > .contacts": {
    "& > .contact-desc": {
      fontSize: "1.1rem",
      marginBottom: "0.6rem",
    },
    "& > .contact-link": {
      fontSize: "0.95rem",
      marginBottom: "0.5rem",
    },
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
