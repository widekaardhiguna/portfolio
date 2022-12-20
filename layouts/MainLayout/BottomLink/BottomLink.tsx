import { styled, theme } from "theme/config"
import Image from "next/future/image"
import myAvatar from "public/my_avatar.jpg"
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons"
const Root = styled("div", {
  padding: "0.5rem",
  display: "flex",
  justifyContent: "space-evenly",
})

export const BottomLink = () => {
  return (
    <Root>
      <a
        href="https://github.com/widekaardhiguna"
        target="_blank"
        rel="noreferrer"
      >
        <IconBrandGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/wideka-ardhiguna-537b89192"
        target="_blank"
        rel="noreferrer"
      >
        <IconBrandLinkedin />
      </a>
    </Root>
  )
}
