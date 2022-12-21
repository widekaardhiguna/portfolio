import colorAlpha from "color-alpha"
import { useRef, useState } from "react"
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
    overflow: "hidden",
    transition: "height 0.25s ease",
  },
})

export const Collapsed = ({ icon, title, body }: CollapsedProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <Root>
      <button className="head" onClick={() => setIsOpen((prev) => !prev)}>
        {icon}
        <span className="text">{title}</span>
        <IconChevronLeft
          className="icon-collapsed"
          data-show={isOpen || undefined}
        />
      </button>
      <div
        className="body"
        // data-show={isOpen || undefined}
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        {body}
      </div>
    </Root>
  )
}
