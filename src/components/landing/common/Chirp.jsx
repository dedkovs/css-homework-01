import Typography from '@mui/material/Typography';

const chirpStyle = {
  fontSize: '1.1rem',
  fontWeight: 700,
  fontStyle: 'italic',
  color: 'text.blue',
};

const Chirp = () => <Typography sx={chirpStyle}>Chirp.</Typography>;

export default Chirp;
