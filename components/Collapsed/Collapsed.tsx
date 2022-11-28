import colorAlpha from "color-alpha"
import { useState } from "react"
import { styled, theme } from "theme/config"

export interface CollapsedProps {
  icon?: React.ReactNode
  title?: React.ReactNode
  body?: React.ReactNode
}

const Root = styled("div", {
  "& > .head": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: colorAlpha(theme.colors.light.value, 0.1),
    border: "none",
    width: "100%",
    padding: "0.8rem 1rem",
    "&:hover": {
      cursor: "pointer",
      background: colorAlpha(theme.colors.light.value, 0.2),
    },
    "& > svg:first-child": {
      height: "1.5rem",
      width: "auto",
    },
  },
  "& > .body": {
    display: "none",
    [`&[data-show]`]: {
      display: "block",
    },
  },
})

export const Collapsed = ({ icon, title, body }: CollapsedProps) => {
  const [show, setShow] = useState(false)

  return (
    <Root>
      <button className="head" onClick={() => setShow((prev) => !prev)}>
        {icon}
        {title}
      </button>
      <div className="body" data-show={show || undefined}>
        {body}
      </div>
    </Root>
  )
}
