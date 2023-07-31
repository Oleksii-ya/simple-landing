import { Typography } from "@mui/material"

const Title = ({ mb = "20px", children }) => {
  return (
    <Typography
      variant="h5"
      component="h5"
      sx={{ textTransform: "uppercase", marginBottom: mb }}
    >
      {children}
    </Typography>
  )
}
export default Title