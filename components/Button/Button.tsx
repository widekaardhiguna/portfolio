import { VariantProps } from "@stitches/react"
import { styled, theme } from "theme/config"

export type ButtonProps = VariantProps<typeof Button>

export const Button = styled("button", {
  border: "none",
  borderRadius: 8,
  color: "white",
  fontSize: "1rem",
  variants: {
    color: {
      primary: {
        backgroundColor: theme.colors.primary,
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
      },
    },
    size: {
      small: {
        padding: "0.25em 0.5em",
      },
      normal: {
        padding: "0.5em 1em",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "normal",
  },
})
