import colorAlpha from "color-alpha"
import { Portal } from "components/Portal"
import useDebouncedValue from "hooks/useDebouncedValue"
import { useId } from "react"
import { keyframes, styled, theme } from "theme/config"

interface DrawerProps {
  children?: React.ReactNode
  show?: boolean
  onClose?: () => void
}

export const Drawer = ({ children, show = false, onClose }: DrawerProps) => {
  const id = useId()

  const showDebounced = useDebouncedValue(show, 250)

  return (
    <Portal wrapperId={id}>
      <Root data-show={show || showDebounced || undefined}>
        <div className="side" data-closed={!show || undefined}>
          {children}
        </div>
        <div
          onClick={() => {
            onClose?.()
          }}
        ></div>
      </Root>
    </Portal>
  )
}

const slideIn = keyframes({
  "0%": { transform: "translate(-250px, 0px)" },
  "100%": { transform: "translate(0px, 0px)" },
})
const slideOut = keyframes({
  "0%": { transform: "translate(0px, 0px)" },
  "100%": { transform: "translate(-250px, 0px)" },
})

export const Root = styled("div", {
  display: "none",
  "&[data-show]": {
    display: "grid",
  },
  position: "fixed",
  inset: 0,
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.3),
  gridTemplateColumns: "auto 1fr",
  "& > .side": {
    animation: `${slideIn} 250ms ease`,
    "&[data-closed]": {
      animation: `${slideOut} 250ms ease`,
      animationFillMode: "forwards",
    },
  },
})
