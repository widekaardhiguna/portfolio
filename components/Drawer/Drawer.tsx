import colorAlpha from "color-alpha"
import { Portal } from "components/Portal"
import { useId } from "react"
import { styled, theme } from "theme/config"

export const Root = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.3),
  display: "grid",
  gridTemplateColumns: "auto 1fr",
})

interface DrawerProps {
  children?: React.ReactNode
  show?: boolean
  onClose?: () => void
}

export const Drawer = ({ children, show = false, onClose }: DrawerProps) => {
  const id = useId()

  return (
    <Portal wrapperId={id}>
      {show && (
        <Root>
          {children}
          <div onClick={() => onClose?.()}></div>
        </Root>
      )}
    </Portal>
  )
}
