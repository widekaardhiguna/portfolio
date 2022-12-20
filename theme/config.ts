import { createStitches } from "@stitches/react"

export const { css, styled, getCssText, theme, globalCss, keyframes } =
  createStitches({
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
  /* width */
  "::-webkit-scrollbar": {
    width: "0.4rem",
    height: "0.4rem",
  },
  "@media only screen and (max-width: 600px)": {
    "::-webkit-scrollbar": {
      width: "0.15rem",
    },
  },

  /* Track */
  "::-webkit-scrollbar-track": {
    background: "#f1f1f100",
  },

  /* Handle */
  "::-webkit-scrollbar-thumb": {
    background: "rgba(136, 136, 136, 0.5)",
    borderRadius: "0.2rem",
  },

  /* Handle on hover */
  "::-webkit-scrollbar-thumb:hover": {
    background: "rgba(136, 136, 136, 0.9)",
  },
})
