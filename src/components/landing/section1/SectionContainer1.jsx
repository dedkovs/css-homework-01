import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import MaxWidthContainer from '../common/MaxWidthContainer';
import AppBar from './AppBar';
import SectionHeading from '../common/SectionHeading';
import PlainText from '../common/PlainText';
import TwitterButton from '../common/TwitterButton';
import LearnMoreButton from './LearnMoreButton';
import UserAvatarsContainer from './UserAvatarsContainer';
import hero_image_phone_view from '../../../assets/hero_image_phone_view.png';
import hero_image_tablet_view from '../../../assets/hero_image_tablet_view.png';
import {
  sectionHeading,
  text1,
  text2,
  twitterButtonText,
} from '../../../data/section1Data';

const containerStyle = {
  backgroundColor: 'warmWhite.main',
  paddingBottom: { xs: 4, sm: 4, md: 6 },
  paddingLeft: { xs: 2, sm: 4, md: 4 },
  paddingRight: { xs: 2, sm: 4, md: 4 },
};

const sectionHeadingProps = {
  text: sectionHeading,
  marginTop: { xs: 4.5, sm: 3, md: 5 },
  fontSize: { xs: '1.95rem', sm: '3.05rem' },
};

const plainText1Props = {
  text: text1,
  marginTop: { xs: 1.5, sm: 1.4 },
};

const twitterButtonAndLearnMoreContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: { xs: 2, sm: 2, md: 2 },
  flexDirection: { xs: 'column', sm: 'row' },
};

const twitterButtonProps = {
  text: twitterButtonText,
  width: { xs: '100%', sm: 'unset' },
  marginTop: 0,
};

const plainText2Props = {
  text: text2,
  marginTop: { xs: 2, sm: 2 },
  maxWidth: 420,
};

const SectionContainer1 = () => {
  const xs = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const sm = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const heroImageProps = {
    component: 'img',
    src: xs
      ? hero_image_phone_view
      : sm
      ? hero_image_tablet_view
      : hero_image_phone_view,
    width: { xs: '100%', sm: '100%', md: '45%' },
    maxWidth: { xs: '100%', sm: '100%', md: 407 },
    height: '100%',
  };

  return (
    <Box sx={containerStyle}>
      <MaxWidthContainer>
        <AppBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse' },
          }}
        >
          <Box {...heroImageProps} />
          <Box sx={{ paddingRight: { md: 8 } }}>
            <SectionHeading {...sectionHeadingProps} />
            <PlainText {...plainText1Props} />
            <Box sx={twitterButtonAndLearnMoreContainerStyle}>
              <TwitterButton {...twitterButtonProps} />
              <LearnMoreButton />
            </Box>
            <UserAvatarsContainer />
            <PlainText {...plainText2Props} />
          </Box>
        </Box>
      </MaxWidthContainer>
    </Box>
  );
};

export default SectionContainer1;
