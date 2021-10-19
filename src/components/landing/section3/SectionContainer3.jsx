import Box from '@mui/material/Box';
import MaxWidthContainer from '../common/MaxWidthContainer';
import SectionHeading from '../common/SectionHeading';
import CustomerReviewCardsContainer from './CustomerReviewCardsContainer';
import {
  sectionHeading,
  customerReviewCards,
} from '../../../data/section3Data';

const containerStyle = {
  backgroundColor: 'lightBlue.main',
  paddingTop: { xs: 6, sm: 7 },
  paddingBottom: { xs: 6, sm: 0, md: 4 },
  paddingLeft: { xs: 2, sm: 0, md: 4 },
  paddingRight: { xs: 2, sm: 0, md: 4 },
};

const sectionHeadingProps = {
  text: sectionHeading,
  fontSize: { xs: '1.95rem', sm: '1.95rem' },
  width: { xs: '100%', sm: '70%' },
  paddingLeft: { xs: 0, sm: 4, md: 0 },
};

const SectionContainer3 = () => {
  return (
    <Box sx={containerStyle}>
      <MaxWidthContainer>
        <SectionHeading {...sectionHeadingProps} />
        <CustomerReviewCardsContainer
          customerReviewCards={customerReviewCards}
        />
      </MaxWidthContainer>
    </Box>
  );
};

export default SectionContainer3;
