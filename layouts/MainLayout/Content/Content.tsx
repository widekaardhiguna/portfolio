import colorAlpha from "color-alpha"
import { styled, theme } from "theme/config"

export const Content = styled("div", {
  backgroundImage: "url('/bg_content.png')",
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.7),
  backgroundBlendMode: "darken",
  overflow: "auto",
})
