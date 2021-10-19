import Box from '@mui/material/Box';
import MaxWidthContainer from '../common/MaxWidthContainer';
import Chirp from '../common/Chirp';
import Link from '@mui/material/Link';
import FooterLink from './FooterLink';
import TwitterIcon from '../common/TwitterIcon';
import { footerLinks } from '../../../data/section5Data';

const sectionContainerStyle = {
  backgroundColor: 'lightBlue.main',
  paddingTop: { xs: 2.5, sm: 3 },
  paddingBottom: 2.5,
  paddingLeft: { xs: 2, sm: 4 },
  paddingRight: { xs: 2, sm: 4 },
};

const linksContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: { xs: 1, sm: 0 },
};

const twitterIconContainerStyle = { display: 'flex', alignItems: 'center' };

const SectionContainer5 = () => {
  return (
    <Box sx={sectionContainerStyle}>
      <MaxWidthContainer>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'flex-start', sm: 'space-between' },
            alignItems: { xs: 'flex-start', sm: 'center' },
          }}
        >
          <Chirp />
          <Box sx={linksContainerStyle}>
            <Link href="#" underline="none" sx={twitterIconContainerStyle}>
              <TwitterIcon color="black" />
            </Link>

            {footerLinks.map((link) => (
              <FooterLink key={link} link={link} />
            ))}
          </Box>
        </Box>
      </MaxWidthContainer>
    </Box>
  );
};

export default SectionContainer5;
