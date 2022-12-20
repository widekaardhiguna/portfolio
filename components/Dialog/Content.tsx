import * as Dialog from "@radix-ui/react-dialog"
import { styled, theme, keyframes } from "theme/config"

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
})

export const Content = styled(Dialog.Content, {
  backgroundColor: theme.colors.dark.value,
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "900px",
  maxHeight: "85vh",
  // padding: 25,
  animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
})
