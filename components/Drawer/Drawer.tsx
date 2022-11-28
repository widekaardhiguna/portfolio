import colorAlpha from "color-alpha"
import { Portal } from "components/Portal"
import { useId } from "react"
import { keyframes, styled, theme } from "theme/config"

const fadeIn = keyframes({
  "0%": { transform: "translate(-250px, 0px)" },
  "100%": { transform: "translate(0px, 0px)" },
})

export const Root = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.3),
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  "& > .side": {
    animation: `${fadeIn} 250ms ease`,
  },
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
          <div className="side">{children}</div>
          <div onClick={() => onClose?.()}></div>
        </Root>
      )}
    </Portal>
  )
}
