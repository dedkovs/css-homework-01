import Box from '@mui/material/Box';
import { maxWidth } from '../../../theme';

const MaxWidthContainer = ({ children }) => {
  return <Box sx={{ maxWidth, margin: '0 auto' }}>{children}</Box>;
};

export default MaxWidthContainer;
