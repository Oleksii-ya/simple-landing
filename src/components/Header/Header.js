import TemporaryDrawer from './TemporaryDrawer';
import MainMenu from './MainMenu';
import ActionButtons from './ActionButtons';

import {
  AppBar,
  Toolbar,
  Button,
  Box
} from '@mui/material';


const Header = () => {
  return (
    <>
      <AppBar color="inherit" position="relative">
        <Toolbar sx={{
          display: "flex",
          justifyContent: {
            md: "space-between",
            xs: "start"
          }
        }}>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <TemporaryDrawer />
          </Box>
          <Button sx={
            {
              margin: { xs: "0 auto", md: 0 },
              fontFamily: "Allison",
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: 600
            }}
          >Cats E friends</Button>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <MainMenu />
          </Box>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <ActionButtons />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}
export default Header