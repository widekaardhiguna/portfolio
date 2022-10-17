import { VariantProps } from "@stitches/react"
import { styled, theme } from "theme/config"

export type ButtonProps = VariantProps<typeof Button>

export const Button = styled("button", {
  border: "none",
  borderRadius: 8,
  fontSize: "1rem",
  backgroundColor: theme.colors.primary,
  color: theme.colors.dark,
  variants: {
    size: {
      small: {
        padding: "0.25em 0.5em",
      },
      normal: {
        padding: "0.7em 1.2em",
      },
    },
  },
  defaultVariants: {
    size: "normal",
  },
})
