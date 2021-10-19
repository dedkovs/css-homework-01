import Box from '@mui/material/Box';
import CustomerReviewCard from './CustomerReviewCard';

const containerStyle = {
  display: 'flex',
  width: { xs: '100%', sm: 'max-content' },
  flexWrap: { xs: 'wrap' },
  gap: 2.5,
  marginTop: { xs: 6, sm: 4.5 },
  marginLeft: { xs: 0, sm: 4, md: 0 },
  paddingRight: { xs: 0, sm: 4 },
  paddingBottom: { xs: 0, sm: 0, md: 4 },
};

const CustomerReviewCardsContainer = ({ customerReviewCards }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        '::-webkit-scrollbar': {
          height: { sm: '76px', md: '12px' },
        },
        '::-webkit-scrollbar-thumb': {
          boxShadow: 'inset 0 0 20px 20px hsl(180, 50%, 75%)',
          border: { sm: 'solid 32px #d7f5f5', md: 'none' },
          borderRadius: '50px',
        },
      }}
    >
      <Box sx={containerStyle}>
        {customerReviewCards.map((card) => (
          <CustomerReviewCard key={card.atName} {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default CustomerReviewCardsContainer;
