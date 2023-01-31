import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { Theme } from './Theme';

export const Spinner: FC = () => {
  return (
    <Theme>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    </Theme>
  );
};
