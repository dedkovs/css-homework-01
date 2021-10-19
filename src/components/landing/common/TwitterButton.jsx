import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import TwitterIcon from './TwitterIcon';
import Typography from '@mui/material/Typography';

const textStyle = {
  color: 'text.white',
  fontWeight: 600,
  textTransform: 'none',
  marginLeft: 1,
};

const TwitterButton = ({ width, text, marginTop, marginLeft }) => {
  const buttonContainerStyle = {
    marginTop,
    marginLeft,
    width,
  };

  const buttonStyle = {
    width,
    minWidth: 225,
    height: 48,
    paddingLeft: 2.6,
    paddingRight: 2.6,
  };

  return (
    <Box sx={buttonContainerStyle}>
      <MuiButton
        color="blue2"
        sx={buttonStyle}
        variant="contained"
        disableElevation
      >
        <TwitterIcon color="white" />
        <Typography sx={textStyle}>{text}</Typography>
      </MuiButton>
    </Box>
  );
};

export default TwitterButton;
