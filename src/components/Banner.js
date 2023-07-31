import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const Banner = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image="https://source.unsplash.com/random"
            alt="some img"
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card variant="string" sx={{
          padding: {
            md: "24px 42px",
            lg: "34px 64px"
          }
        }}>
          <CardContent>
            <Typography sx={{ fontSize: { xs: 18, lg: 24 } }}>
              Our motto
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: 34, md: 50, lg: 56 }, marginBottom: "40px" }}
            >
              Help animals
            </Typography>
            <Typography sx={{ fontSize: 18, marginBottom: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam necessitatibus expedita ut animi sapiente recusandae quam
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ textTransform: "uppercase", padding: "16px" }}>
              donate
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Banner