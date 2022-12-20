import { styled } from "theme/config"
import type * as Stitches from "@stitches/react"
import { ComponentPropsWithoutRef } from "react"
import { Text } from "components/Text"

const Root = styled("div", {
  marginTop: "6rem",
  marginBottom: "3em",
  "& > .title": {
    textAlign: "center",
  },
  "& > .title-description": {
    textAlign: "center",
    marginTop: 0,
  },
})

export type TitlePageProps = Stitches.VariantProps<typeof Root> &
  ComponentPropsWithoutRef<typeof Root> & {
    title?: React.ReactNode
    description?: React.ReactNode
  }

export const TitlePage = ({
  title,
  description,
  ...others
}: TitlePageProps) => {
  return (
    <Root {...others}>
      <Text as="h1" className="title">
        {title}
      </Text>
      <Text as="p" className="title-description">
        {description}
      </Text>
    </Root>
  )
}
