import {
  IconButton,
  ButtonGroup,
  Divider
} from '@mui/material';
import { Favorite, Person, Notifications } from '@mui/icons-material';

const ActionButtons = () => {
  return (
    <ButtonGroup
      sx={{ display: { md: "flex", xs: "none" } }}
      variant="text"
      aria-label="text button group"
    >
      <IconButton sx={{ padding: { lg: "0 40px", md: "0 14px" } }}><Favorite /></IconButton>
      <Divider
        orientation="vertical"
        flexItem
      />
      <IconButton sx={{ padding: { lg: "0 40px", md: "0 14px" } }}><Person /></IconButton>
      <Divider
        orientation="vertical"
        flexItem
      />
      <IconButton sx={{ padding: { lg: "0 40px", md: "0 14px" } }}><Notifications /></IconButton>

    </ButtonGroup>
  )
}
export default ActionButtons