import Box from '@mui/material/Box';

const userAvatarStyle = {
  width: 40,
  height: 40,
  ':not(:first-of-type)': {
    marginLeft: -2.5,
  },
};

const UserAvatar = ({ img }) => {
  return <Box component="img" sx={userAvatarStyle} src={img} />;
};

export default UserAvatar;
