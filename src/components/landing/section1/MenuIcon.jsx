import IconButton from '@mui/material/IconButton';
import MuiMenuIcon from '@mui/icons-material/Menu';

const menuIcon = { fontSize: '1.9rem' };

const MenuIcon = () => {
  return (
    <IconButton size="large" edge="end" color="inherit" aria-label="menu">
      <MuiMenuIcon sx={menuIcon} />
    </IconButton>
  );
};

export default MenuIcon;
