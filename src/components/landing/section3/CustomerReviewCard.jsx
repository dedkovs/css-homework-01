import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import heart from '../../../assets/heart.svg';

const cardStyle = {
  padding: 3,
  width: { xs: '100%', sm: 320 },
};

const cardContentStyle = {
  padding: 0,
  ':last-child': { paddingBottom: 0 },
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const avatarAndNameContainerStyle = { display: 'flex', alignItems: 'center' };

const avatarStyle = {
  width: 55,
  height: 55,
};

const nameContainerStyle = {
  marginLeft: 1,
};

const nameStyle = {
  fontSize: '1rem',
  fontWeight: 700,
};

const atNameStyle = {
  fontSize: '0.8rem',
  color: 'text.grey',
};

const textStyle = {
  marginTop: 1.5,
  lineHeight: '1.6rem',
  color: 'text.grey',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 2,
};

const likesContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const heartStyle = {
  width: 22,
  height: 22,
};

const likesNumberStyle = {
  marginLeft: 1,
  color: 'text.grey',
};

const dateStyle = {
  color: 'text.grey',
};

const CustomerReviewCard = ({
  avatar,
  name,
  atName,
  icon,
  text,
  likesNumber,
  date,
}) => {
  return (
    <Box>
      <Card elevation={0} sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <Box sx={headerContainerStyle}>
            <Box sx={avatarAndNameContainerStyle}>
              <Box component="img" src={avatar} sx={avatarStyle} />
              <Box sx={nameContainerStyle}>
                <Typography sx={nameStyle}>{name}</Typography>
                <Typography sx={atNameStyle}>{atName}</Typography>
              </Box>
            </Box>
            <Box>{icon}</Box>
          </Box>
          <Typography sx={textStyle}>{text}</Typography>
          <Box sx={footerContainerStyle}>
            <Box sx={likesContainerStyle}>
              <Box component="img" src={heart} sx={heartStyle} />
              <Typography sx={likesNumberStyle}>{likesNumber}</Typography>
            </Box>
            <Typography sx={dateStyle}>{date}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomerReviewCard;
