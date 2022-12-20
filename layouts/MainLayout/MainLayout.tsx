import { IconMenu2 } from "@tabler/icons"
import colorAlpha from "color-alpha"
import { Button, Drawer, IconButton } from "components"
import { useState } from "react"
import useDrawerStore from "stores/useDrawerStore"
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
    "& > .toggle-drawer-button": {
      display: "none",
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
  const show = useDrawerStore((state) => state.show)
  const setShow = useDrawerStore((state) => state.setShow)
  const toggleShow = useDrawerStore((state) => state.toggleShow)
  // const [showDrawer, setShowDrawer] = useState(false)

  return (
    <Wrapper>
      <IconButton
        className="toggle-drawer-button"
        onClick={() => toggleShow()}
        css={{
          position: "fixed",
          top: 15,
          left: 15,
        }}
      >
        <IconMenu2 color="black" />
      </IconButton>
      <div className="container">
        <div className="side">
          <Sidebar />
          <Drawer show={show} onClose={() => setShow(false)}>
            <Sidebar />
          </Drawer>
        </div>
        <main className="content">{children}</main>
      </div>
    </Wrapper>
  )
}
