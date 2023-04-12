import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { Theme } from './Theme';

export const Spinner: FC = () => {
  return (
    <Theme>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    </Theme>
  );
};
