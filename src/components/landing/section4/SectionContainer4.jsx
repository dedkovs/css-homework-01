import Box from '@mui/material/Box';
import MaxWidthContainer from '../common/MaxWidthContainer';
import SectionHeading from '../common/SectionHeading';
import PlainText from '../common/PlainText';
import PricePlanCard from './PricePlanCard';
import {
  sectionHeading,
  subtitle,
  monthlyPrice,
  features,
} from '../../../data/section4Data';

const containerStyle = {
  backgroundColor: 'white.main',
  paddingTop: 9,
  paddingBottom: 9,
  paddingLeft: 2,
  paddingRight: 2,
};

const sectionHeadingProps = {
  text: sectionHeading,
  align: 'center',
  fontSize: { xs: '1.95rem', sm: '1.95rem' },
  width: { xs: '100%', sm: '100%' },
};

const plainTextProps = {
  text: subtitle,
  align: 'center',
  width: { xs: '100%', sm: '100%' },
  maxWidth: 500,
  margin: '0 auto',
  marginTop: { xs: 1, sm: 1 },
};

const SectionContainer4 = () => {
  return (
    <Box sx={containerStyle}>
      <MaxWidthContainer>
        <SectionHeading {...sectionHeadingProps} />
        <PlainText {...plainTextProps} />
        <PricePlanCard monthlyPrice={monthlyPrice} features={features} />
      </MaxWidthContainer>{' '}
    </Box>
  );
};

export default SectionContainer4;
