import Box from '@mui/material/Box';
import NavLink from './NavLink';
import { twitterButtonText, navLinks } from '../../../data/section1Data';
import TwitterButton from '../common/TwitterButton';

const linksContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const NavMenu = () => {
  return (
    <Box sx={linksContainerStyle}>
      {navLinks.map((link) => (
        <NavLink key={link} link={link} />
      ))}
      <TwitterButton text={twitterButtonText} marginLeft={2.9} />
    </Box>
  );
};

export default NavMenu;
