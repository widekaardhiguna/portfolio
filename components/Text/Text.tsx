import { VariantProps } from "@stitches/react"
import { styled, theme } from "theme/config"

export type TextProps = VariantProps<typeof Text>

export const Text = styled("p", {
  margin: 0,
  padding: 0,
  lineHeight: 1.6,
})
