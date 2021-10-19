import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FeatureContainer from './FeatureContainer';
import TwitterButton from '../common/TwitterButton';

const pricePlanCardContainerStyle = {
  marginTop: { xs: 6, sm: 7 },
};

const cardStyle = {
  padding: { xs: 1.8, sm: 4.5 },
  paddingBottom: { xs: 3.7, sm: 3 },
  borderColor: 'orange.main',
  borderRadius: 2,
  backgroundColor: 'warmWhite.main',
  maxWidth: 470,
  margin: '0 auto',
};

const cardContentStyle = {
  padding: { xs: 0, sm: 0 },
  ':last-child': { paddingBottom: 0 },
};

const textContainerStyle = {
  paddingTop: { xs: 1.9, sm: 0 },
  paddingLeft: { xs: 1.9, sm: 0 },
  paddingRight: { xs: 1.9, sm: 0 },
};

const titleStyle = {
  fontSize: '1.3rem',
  color: 'text.grey',
  lineHeight: { xs: '1.5rem', sm: '1.2rem' },
};

const monthlyPriceStyle = {
  display: 'inline',
  color: 'text.black',
  fontWeight: 700,
  fontSize: '3.1rem',
  lineHeight: { xs: '4.3rem', sm: '4.3rem' },
};

const moStyle = {
  fontSize: '1.3rem',
  color: 'text.grey',
};

const featuresContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: { xs: 2.5, sm: 2.2 },
  paddingTop: 2,
  paddingBottom: 2,
  borderTop: '1px solid #cecece',
  borderBottom: `1px solid #cecece`,
  marginTop: { xs: 1, sm: 1.5 },
};

const PricePlanCard = ({ monthlyPrice, features }) => {
  return (
    <Box sx={pricePlanCardContainerStyle}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent sx={cardContentStyle}>
          <Box sx={textContainerStyle}>
            <Typography sx={titleStyle}>Monthly</Typography>
            <Typography sx={moStyle}>
              <Box component="span" sx={monthlyPriceStyle}>
                {monthlyPrice}
              </Box>
              /mo
            </Typography>
            <Box sx={featuresContainerStyle}>
              {features.map((featureX) => (
                <FeatureContainer key={featureX} feature={featureX} />
              ))}
            </Box>
          </Box>
          <TwitterButton
            width="100%"
            text="Start Trial with Twitter"
            marginTop={2.5}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default PricePlanCard;
