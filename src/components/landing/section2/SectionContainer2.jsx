import Box from '@mui/material/Box';
import MaxWidthContainer from '../common/MaxWidthContainer';
import SectionHeading from '../common/SectionHeading';
import FeatureCardsContainer from './FeatureCardsContainer';
import { sectionHeading, featureCards } from '../../../data/section2Data';

const containerStyle = {
  paddingTop: 9,
  paddingBottom: 9,
  paddingLeft: { xs: 2, sm: 4, md: 4 },
  paddingRight: { xs: 2, sm: 4, md: 4 },
};

const sectionHeadingProps = {
  text: sectionHeading,
  fontSize: { xs: '1.95rem', sm: '1.95rem' },
  width: { xs: '100%', sm: '440px', md: '440px' },
};

const SectionContainer2 = () => {
  return (
    <Box sx={containerStyle}>
      <MaxWidthContainer>
        <SectionHeading {...sectionHeadingProps} />
        <FeatureCardsContainer featureCards={featureCards} />
      </MaxWidthContainer>
    </Box>
  );
};

export default SectionContainer2;
