import { Drawer, Portal } from "components"
import { styled, theme } from "theme/config"
import { Nav } from "../Nav"
import { ProfileCard } from "../ProfileCard"

interface SidebarProps {}

const Root = styled("div", {
  backgroundColor: theme.colors.dark,
  width: 250,
  height: "100%",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  "& > .nav-wrapper": {
    display: "grid",
    alignItems: "center",
  },
})

export const Sidebar = () => {
  return (
    <Root>
      <ProfileCard />
      <div className="nav-wrapper">
        <Nav />
      </div>
    </Root>
  )
}
