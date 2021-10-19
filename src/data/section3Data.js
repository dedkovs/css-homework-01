import userAvatar01 from '../assets/userAvatar01.svg';
import userAvatar04 from '../assets/userAvatar04.svg';
import userAvatar06 from '../assets/userAvatar06.svg';
import TwitterIcon from '../components/landing/common/TwitterIcon';

export const sectionHeading = 'What our customers say';

const twitterIcon = <TwitterIcon color="twitterBlue" />;

export const customerReviewCards = [
  {
    avatar: userAvatar01,
    name: 'Sara May',
    atName: '@sara_may',
    icon: twitterIcon,
    text: (
      <>
        I just tried out @chirp and it's amazing, love all the analytics I can
        see.
      </>
    ),
    likesNumber: 2,
    date: 'March 2, 2021',
  },
  {
    avatar: userAvatar04,
    name: 'Jack Scott',
    atName: '@jackscott_',
    icon: twitterIcon,
    text: (
      <>
        I initially started using Chirp to support the co-founder as I
        personally knew him, but after having tried it out for a few weeks, I
        can genuinely say this changed my Twitter game.
      </>
    ),
    likesNumber: 32,
    date: 'March 2, 2021',
  },
  {
    avatar: userAvatar06,
    name: 'Jessica May',
    atName: '@jmay98',
    icon: twitterIcon,
    text: (
      <>
        Absolutely love everything about Chirp, from the design to how
        everything works smoothly.
      </>
    ),
    likesNumber: 221,
    date: 'March 2, 2021',
  },
];
