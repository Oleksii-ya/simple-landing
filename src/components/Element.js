import { Button, Card, CardActions, CardMedia, Grid, IconButton } from "@mui/material"
import { Favorite } from '@mui/icons-material';
import { Colors } from "../styles";

const Element = ({ title }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="string" sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          alt="some img"
          height="240"
          image="https://source.unsplash.com/random"
        />
        <CardActions sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          opacity: "50%",
          zIndex: 11,
          backgroundColor: Colors.inverse,
          width: "100%",
          "&:hover": {
            opacity: "80%"
          }
        }}>
          <Button sx={{ color: Colors.white }}>{title}</Button>
          <IconButton><Favorite sx={{
            "&:hover": {
              color: Colors.primary
            }
          }} /></IconButton>
        </CardActions>
      </Card>
    </Grid >
  )
}
export default Element
