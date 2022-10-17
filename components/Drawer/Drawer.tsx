import colorAlpha from "color-alpha"
import { Portal } from "components/Portal"
import { useId } from "react"
import { styled, theme } from "theme/config"

export const Root = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.5),
  display: "grid",
  gridTemplateColumns: "auto 1fr",
})

interface DrawerProps {
  children?: React.ReactNode
  show?: boolean
}

export const Drawer = ({ children, show = false }: DrawerProps) => {
  const id = useId()

  return <Portal wrapperId={id}>{show && <Root>{children}</Root>}</Portal>
}
