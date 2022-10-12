import colorAlpha from "color-alpha"
import Link from "next/link"
import { styled, theme } from "theme/config"
import { links } from "./links"

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
      },
    },
  },
})

export const Nav = () => {
  return (
    <Root>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <a className="link">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Root>
  )
}
