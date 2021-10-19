import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Chirp from '../common/Chirp';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from './MenuIcon';
import NavMenu from './NavMenu';

const appBarStyle = {
  height: { xs: 90, sm: 120 },
  flexDirection: 'row',
  color: 'text.black',
};

const toolbarStyle = {
  flexGrow: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: { xs: 0, sm: 0 },
};

const AppBar = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      <MuiAppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={appBarStyle}
      >
        <Toolbar sx={toolbarStyle}>
          <Chirp />
          {matches ? <MenuIcon /> : <NavMenu />}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
