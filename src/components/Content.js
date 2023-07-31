import Element from "./Element"
import { itemData } from "./data"
import { Grid } from "@mui/material"

const Content = () => {
  return (
    <Grid container spacing={3}>
      {itemData.map((item) => <Element key={item.title} title={item.title} />)}
    </Grid>
  )
}
export default Content