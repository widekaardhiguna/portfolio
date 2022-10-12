import { styled, theme } from "theme/config"
import { Sidebar } from "./Sidebar"

interface MainLayoutProps {
  children?: React.ReactNode
}

const Nav = styled("nav", {
  backgroundColor: theme.colors.primary,
})

const Container = styled("div")

const Wrapper = styled("div", {
  backgroundColor: "#404040",
  height: "100vh",
  [`& ${Container}`]: {
    backgroundColor: theme.colors.background,
    height: "100%",
    overflow: "auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
  },

  "@xl": {
    display: "grid",
    placeContent: "center",
    [`& ${Container}`]: {
      width: 1400,
      height: "95vh",
      borderRadius: 8,
    },
  },
})

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Sidebar />
        </div>
        <div>s</div>
      </Container>
    </Wrapper>
  )
}
