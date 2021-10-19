import Box from '@mui/material/Box';
import UserAvatar from './UserAvatar';
import { userAvatars } from '../../../data/section1Data';

const avatarsContainerStyle = {
  display: 'flex',
  marginTop: { xs: 3, sm: 3.6 },
};

const UserAvatarsContainer = () => {
  return (
    <Box sx={avatarsContainerStyle}>
      {userAvatars.map((avatar) => (
        <UserAvatar key={avatar} img={avatar} />
      ))}
    </Box>
  );
};

export default UserAvatarsContainer;
