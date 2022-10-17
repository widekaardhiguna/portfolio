import { styled } from "theme/config"

interface ContainerProps {
  children?: React.ReactNode
}

const Root = styled("div", {})

export const Container = ({ children }: ContainerProps) => {
  return <Root>{children}</Root>
}
