import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import checkmark from '../../../assets/checkmark.svg';

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
};

const checkmarkStyle = {
  width: 23,
  heigth: 23,
};

const textStyle = {
  marginLeft: 2,
  color: 'text.grey',
};

const FeatureContainer = ({ feature }) => {
  return (
    <Box sx={containerStyle}>
      <Box component="img" src={checkmark} sx={checkmarkStyle} />
      <Typography sx={textStyle}>{feature}</Typography>
    </Box>
  );
};

export default FeatureContainer;
