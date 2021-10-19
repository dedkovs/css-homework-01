import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'text.bluegreen',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'text.bluegreen',
  marginTop: { xs: 2, sm: 0 },
  marginLeft: { xs: 0, sm: 2 },
};

const linkTextStyle = {
  fontWeight: 700,
  flex: 'none',
};

const arrowStyle = {
  marginLeft: 0.3,
};

const LearnMoreButon = () => {
  return (
    <Box sx={linkContainerStyle}>
      <Link href="#" underline="hover" sx={linkStyle}>
        <Typography sx={linkTextStyle}>Learn more</Typography>
        <ArrowForwardIcon sx={arrowStyle} fontSize="0.6rem" />
      </Link>
    </Box>
  );
};

export default LearnMoreButon;
