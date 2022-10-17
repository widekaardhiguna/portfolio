import colorAlpha from "color-alpha"
import { Drawer } from "components"
import { useState } from "react"
import { styled, theme } from "theme/config"
import { Content } from "./Content"
import { Sidebar } from "./Sidebar"

interface MainLayoutProps {
  children?: React.ReactNode
}

const Wrapper = styled("div", {
  backgroundColor: "#404040",
  height: "100vh",
  "& > .container": {
    backgroundColor: theme.colors.background,
    height: "100%",
    overflow: "auto",
    "& > .side": {
      display: "none",
    },
    "& > .content": {
      backgroundImage: "url('/bg_content.png')",
      backgroundColor: colorAlpha(theme.colors.dark.value, 0.7),
      backgroundBlendMode: "darken",
      overflow: "auto",
      height: "100%",
    },
  },

  "@md": {
    "& > .container": {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      "& > .side": {
        display: "block",
      },
    },
  },

  "@xl": {
    display: "grid",
    placeContent: "center",
    "& > .container": {
      width: 1400,
      height: "95vh",
      borderRadius: 8,
    },
  },
})

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [showDrawer, setShowDrawer] = useState(false)

  return (
    <Wrapper>
      <div className="container">
        <div className="side">
          <Sidebar />
          <Drawer show={showDrawer}>
            <Sidebar />
          </Drawer>
        </div>
        <main className="content">{children}</main>
      </div>
    </Wrapper>
  )
}
