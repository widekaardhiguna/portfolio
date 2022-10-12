import { styled, theme } from "theme/config"
import Image from "next/future/image"
import myAvatar from "public/my_avatar.jpg"

const Root = styled("div", {
  display: "grid",
  placeContent: "center",
  padding: "0.8rem",
  "& > .avatar-wrapper": {
    display: "grid",
    placeContent: "center",
    "& > .avatar": {
      borderRadius: "50%",
      width: 60,
      height: 60,
      textAlign: "center",
      display: "block",
      marginBottom: "0.7rem",
    },
  },
  "& > .name": {
    fontSize: "1.2rem",
    textAlign: "center",
    color: theme.colors.light,
    marginBottom: "0.5rem",
  },
  "& > .profession": {
    fontSize: "1rem",
    textAlign: "center",
    color: theme.colors.light,
  },
})

export const ProfileCard = () => {
  return (
    <Root>
      <div className="avatar-wrapper">
        <Image className="avatar" src={myAvatar} alt="my profile picture" />
      </div>
      <span className="name">Wideka Ardhiguna</span>
      <span className="profession">Front End Developer</span>
    </Root>
  )
}
