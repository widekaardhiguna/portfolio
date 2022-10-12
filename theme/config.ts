import { createStitches } from "@stitches/react"

export const { css, styled, getCssText, theme, globalCss } = createStitches({
  theme: {
    colors: {
      primary: "#FFFFFF",
      background: "#333333",
      dark: "#212121",
      light: "#FFFFFF",
    },
  },
  media: {
    xs: "(min-width: 576px)",
    sm: "(min-width: 768px)",
    md: "(min-width: 992px)",
    lg: "(min-width: 1200px)",
    xl: "(min-width: 1400px)",
  },
})

export const globalStyles = globalCss({
  "*": {
    color: theme.colors.light,
  },
})
