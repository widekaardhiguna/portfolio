import colorAlpha from "color-alpha"
import { getURLPaths } from "helpers/url"
import Link from "next/link"
import { styled, theme } from "theme/config"
import { links } from "./links"
import { useRouter } from "next/router"
import useDrawerStore from "stores/useDrawerStore"

const Root = styled("nav", {
  "& > ul": {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    "& > li": {
      "& > .link": {
        display: "block",
        padding: "1em 1.5em",
        textDecoration: "inherit",
        textAlign: "center",
        "&:hover": {
          backgroundColor: colorAlpha(theme.colors.light.value, 0.12),
        },
        "&[data-active]": {
          backgroundColor: colorAlpha(theme.colors.light.value, 0.12),
        },
      },
    },
  },
})

export const Nav = () => {
  const setShow = useDrawerStore((state) => state.setShow)
  const router = useRouter()
  const firstPath = "/" + router.pathname.split("/")[1]
  return (
    <Root>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a
                className="link"
                data-active={link.href === firstPath || undefined}
                onClick={() => setShow(false)}
              >
                {link.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Root>
  )
}
