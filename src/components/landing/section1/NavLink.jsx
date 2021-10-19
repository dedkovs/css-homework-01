import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const linkStyle = {
  color: 'text.grey',
  marginLeft: 2.6,
  fontSize: '1.05rem',
};

const NavLink = ({ link }) => {
  return (
    <Link href="#" underline="hover" sx={linkStyle}>
      <Typography>{link}</Typography>
    </Link>
  );
};

export default NavLink;
