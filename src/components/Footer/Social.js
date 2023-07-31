import { ButtonGroup, IconButton } from "@mui/material"
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Social = ({ mgBot }) => {
  return (
    <ButtonGroup sx={{ marginBottom: mgBot }} >
      <IconButton sx={{ paddingLeft: 0 }} color="dove_gray"><Facebook /></IconButton>
      <IconButton color="dove_gray"><Twitter /></IconButton>
      <IconButton color="dove_gray"><Instagram /></IconButton>
    </ButtonGroup>
  )
}
export default Social