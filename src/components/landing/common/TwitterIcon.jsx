import MuiTwitterIcon from '@mui/icons-material/Twitter';

const TwitterIcon = ({ color }) => {
  const twitterIconStyle = {
    color: `text.${color}`,
    fontSize: '1.5rem',
  };

  return <MuiTwitterIcon sx={twitterIconStyle} />;
};

export default TwitterIcon;
