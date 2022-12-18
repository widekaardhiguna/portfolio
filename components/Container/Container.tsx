import { styled } from "theme/config"
import type * as Stitches from "@stitches/react"
import { ComponentPropsWithoutRef } from "react"

export const Container = styled("div", {
  maxWidth: 1000,
  margin: "0 auto",
})

export type ContainerProps = Stitches.VariantProps<typeof Container> &
  ComponentPropsWithoutRef<typeof Container>
