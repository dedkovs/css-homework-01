import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  fontSize: { xs: '0.95rem' },
  lineHeight: { xs: 1.7 },
  color: 'text.grey',
};

const PlainText = ({ align, text, margin, marginTop, width, maxWidth }) => {
  const containerStyle = {
    width,
    maxWidth,
    margin,
    marginTop,
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={style} align={align}>
        {text}
      </Typography>
    </Box>
  );
};

export default PlainText;
