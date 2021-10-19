import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const linkStyle = {
  color: 'text.black',
  marginLeft: 2.9,
};

const FooterLink = ({ link }) => {
  return (
    <Link href="#" underline="hover" sx={linkStyle}>
      <Typography sx={{ fontSize: { xs: '1.05rem', sm: '1.08rem' } }}>
        {link}
      </Typography>
    </Link>
  );
};

export default FooterLink;
