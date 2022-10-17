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
  [`& > .container`]: {
    backgroundColor: theme.colors.background,
    height: "100%",
    overflow: "auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
  },

  "@xl": {
    display: "grid",
    placeContent: "center",
    [`& > .container`]: {
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
        <div>
          <Sidebar />
          <Drawer show={showDrawer}>
            <Sidebar />
          </Drawer>
        </div>
        <Content>{children}</Content>
      </div>
    </Wrapper>
  )
}
