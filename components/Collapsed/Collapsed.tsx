import colorAlpha from "color-alpha"
import { useState } from "react"
import { styled, theme } from "theme/config"
import { IconChevronLeft } from "@tabler/icons"

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
    "& > .text": {
      flexGrow: 1,
      textAlign: "left",
    },
    "& > .icon-collapsed": {
      height: "1rem",
      width: "auto",
      transition: "transform 0.3s ease",
      [`&[data-show]`]: {
        transform: "rotate(-90deg)",
      },
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
        <span className="text">{title}</span>
        <IconChevronLeft
          className="icon-collapsed"
          data-show={show || undefined}
        />
      </button>
      <div className="body" data-show={show || undefined}>
        {body}
      </div>
    </Root>
  )
}
