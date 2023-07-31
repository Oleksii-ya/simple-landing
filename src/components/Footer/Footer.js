import { Button, ButtonGroup, Grid, Typography } from "@mui/material"

import { Colors } from "../../styles/index"
import Social from "./Social";
import Title from "./Title";
import NavList from "./NavList";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: Colors.shaft,
      marginTop: "50px",
      padding: "30px",
      color: Colors.dove_gray
    }}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Title>about us</Title>
          <Typography
            sx={{ marginBottom: "20px" }}
            variant="h6"
            component="p"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Impedit laborum quo, tempora reiciendis ipsum, sit explicabo, sint expedita minus obcaecati minima nisi libero accusantium?
            Ipsum minus tempore perferendis aliquam harum.
          </Typography>
          <Social mgBot={"30px"} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Title>information</Title>
          <NavList mgBot={"30px"} names={["Lorem ipsum", "Privacy & Policy", "Terms & Conditions"]} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Title>my account</Title>
          <NavList names={["Initiatives and projects", "Favorite animals", "My Account"]} />
        </Grid>
      </Grid>
    </footer>
  )
}
export default Footer