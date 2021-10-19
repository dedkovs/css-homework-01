import Box from '@mui/material/Box';
import FeatureCard from './FeatureCard';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: { xs: 2.5, sm: 2.5, md: 4 },
  marginTop: 3.5,
};

const FeatureCardsContainer = ({ featureCards }) => {
  return (
    <Box sx={containerStyle}>
      {featureCards.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </Box>
  );
};

export default FeatureCardsContainer;
