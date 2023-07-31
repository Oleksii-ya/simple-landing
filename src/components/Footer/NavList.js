import { Button, ButtonGroup } from "@mui/material"

const NavList = ({ names, mgBot = 0 }) => {
  return (
    <ButtonGroup
      color="dove_gray"
      variant="string"
      orientation="vertical"
      sx={{ alignItems: "start", marginBottom: mgBot }}
    >
      {names.map((item, index) => <Button key={index} sx={{ paddingLeft: 0, textAlign: "start" }}>{item}</Button>)}
    </ButtonGroup>
  )
}
export default NavList