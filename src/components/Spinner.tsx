import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

const Spinner: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Spinner;
