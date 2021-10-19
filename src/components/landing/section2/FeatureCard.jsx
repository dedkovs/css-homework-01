import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardStyle = {
  padding: 2.5,
  maxWidth: { xs: '100%', sm: '100%', md: 'calc(50% - 16px)' },
};

const cardContentStyle = {
  padding: 0,
  ':last-child': { paddingBottom: 0 },
};

const iconStyle = {
  width: 35,
  height: 35,
};

const titleStyle = {
  fontWeight: 700,
  marginTop: 1,
};

const textStyle = {
  marginTop: 1.5,
  fontSize: '1rem',
  lineHeight: '1.6rem',
  color: 'text.grey',
};

const FeatureCard = ({ icon, title, text }) => {
  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box component="img" src={icon} sx={iconStyle} />
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography sx={textStyle}>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
