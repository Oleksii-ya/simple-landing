import { useState } from 'react';
import {
  Button,
  ButtonGroup,
  MenuItem,
  Menu,
} from '@mui/material';

import { KeyboardArrowDown } from '@mui/icons-material';


const MainMenu = ({ orientation = "horizontal" }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const seStart = { justifyContent: "flex-start" }
  return (
    <>
      <ButtonGroup
        orientation={orientation}
        variant="string"
      >
        <Button sx={{ ...seStart }}>HOME</Button>
        <Button sx={{ ...seStart }}>VOLONTEER</Button>
        <Button
          sx={{ ...seStart }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >STORIES</Button>
        <Button sx={{ ...seStart }}>LOGIN</Button>
      </ButtonGroup>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Podcast</MenuItem>
      </Menu>
    </>
  )
}
export default MainMenu