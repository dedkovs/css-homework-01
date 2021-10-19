import emoji_chart from '../assets/emoji_chart.png';
import emoji_nerd from '../assets/emoji_nerd.png';
import emoji_newspaper from '../assets/emoji_newspaper.png';
import emoji_sun from '../assets/emoji_sun.png';

export const sectionHeading = 'Features that help you Tweet smarter.';

export const featureCards = [
  {
    icon: emoji_chart,
    title: 'Analytics',
    text: (
      <>
        We constantly monitor your audience as it grows — so you can Tweet when
        your followers are most likely to be online and ready to engage with
        your content.
      </>
    ),
  },
  {
    icon: emoji_nerd,
    title: 'Smart Analyzer',
    text: (
      <>
        Chirp automatically recognizes your followers` most active times and
        automatically sends you notifications if you're missing out on an
        opportunity.
      </>
    ),
  },
  {
    icon: emoji_newspaper,
    title: 'Scheduled Your Tweets',
    text: (
      <>
        Quality tweets drive tons of engagement. With Chirp, you can write
        tweets in an advance and schedule them when your audience is most likely
        to read.
      </>
    ),
  },
  {
    icon: emoji_sun,
    title: 'Dark Mode',
    text: (
      <>
        Friendly on the eyes, no matter what time you write your Tweets. All
        colors are chosen to make sure your eyes are at ease at all times.
      </>
    ),
  },
];
