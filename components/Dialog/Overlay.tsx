import * as Dialog from "@radix-ui/react-dialog"
import colorAlpha from "color-alpha"
import { styled, theme } from "theme/config"

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: colorAlpha(theme.colors.dark.value, 0.4),
  position: "fixed",
  inset: 0,
  // animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})
