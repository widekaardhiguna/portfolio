import { VariantProps } from "@stitches/react"
import { styled, theme } from "theme/config"

export type IconButtonProps = VariantProps<typeof IconButton>

export const IconButton = styled("button", {
  border: "none",
  borderRadius: "50%",
  fontSize: "1rem",
  backgroundColor: theme.colors.primary,
  display: "inline-flex",
  variants: {
    size: {
      small: {
        padding: "0.5em",
      },
      normal: {
        padding: "0.75em",
      },
      large: {
        padding: "1em",
      },
    },
  },
  defaultVariants: {
    size: "normal",
  },
})
