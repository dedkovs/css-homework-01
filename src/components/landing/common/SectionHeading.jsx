import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SectionHeading = ({
  align,
  text,
  marginTop,
  fontSize,
  width,
  paddingLeft,
}) => {
  const containerStyle = {
    marginTop,
    width,
    paddingLeft,
  };

  const textStyle = {
    fontWeight: 700,
    fontSize,
    lineHeight: { xs: 1.2 },
    color: 'text.black',
  };

  return (
    <Box sx={containerStyle}>
      <Typography sx={textStyle} align={align}>
        {text}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
