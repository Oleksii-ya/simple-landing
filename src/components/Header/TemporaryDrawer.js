import * as React from 'react';
import { Box, Drawer, IconButton, Paper } from '@mui/material';
import MainMenu from './MainMenu';
import { Menu } from '@mui/icons-material';
import { Colors } from '../../styles';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    console.log(event.target.id)

    if (event.target.id === "basic-button") {
      return
    }

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MainMenu orientation="vertical" />
    </Box>
  );

  return (
    <div >
      <IconButton onClick={toggleDrawer('left', true)}><Menu /></IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        PaperProps={{ sx: { backgroundColor: Colors.primary } }}
      >
        {list('left')}
      </Drawer>
    </div>
  );
}
