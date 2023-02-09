import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { Theme } from '../../Theme';

interface ICircleWithNumberProps {
  number: number;
}

export const CircleWithNumber: FC<ICircleWithNumberProps> = ({ number }) => {
  return (
    <Theme>
      <Box
        sx={{
          width: '40px',
          height: '40px',
          border: '1px solid #E0E0E0',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="overline">{number}</Typography>
      </Box>
    </Theme>
  );
};
