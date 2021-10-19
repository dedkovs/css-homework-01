import Box from '@mui/material/Box';
import userAvatar01 from '../assets/userAvatar01.svg';
import userAvatar02 from '../assets/userAvatar02.svg';
import userAvatar03 from '../assets/userAvatar03.svg';
import userAvatar04 from '../assets/userAvatar04.svg';
import userAvatar05 from '../assets/userAvatar05.svg';
import userAvatar06 from '../assets/userAvatar06.svg';
import userAvatar07 from '../assets/userAvatar07.svg';
import userAvatar08 from '../assets/userAvatar08.svg';
import userAvatar09 from '../assets/userAvatar09.svg';

export const navLinks = ['Home', 'Pricing', 'FAQ'];

export const userAvatars = [
  userAvatar01,
  userAvatar02,
  userAvatar03,
  userAvatar04,
  userAvatar05,
  userAvatar06,
  userAvatar07,
  userAvatar08,
  userAvatar09,
].reverse();

const numberStyle = {
  display: 'inline',
  color: 'text.bluegreen',
  fontWeight: 700,
};

export const sectionHeading = 'Twitter analytics taken to a whole new level.';

export const text1 = (
  <>
    Chirp is a suite of Twitter analytics that will help you better understand
    your audience, which tweets they like, and most importantly, when they are
    the most active on Twitter.
  </>
);

export const text2 = (
  <>
    Join{' '}
    <Box component="span" sx={numberStyle}>
      195
    </Box>{' '}
    others who have analyzed their followers and scheduled{' '}
    <Box component="span" sx={numberStyle}>
      1342
    </Box>{' '}
    tweets!
  </>
);

export const twitterButtonText = 'Sign in with Twitter';
