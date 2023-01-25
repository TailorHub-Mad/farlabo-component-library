import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Theme } from './theme';

interface ProgressPointerProps {
  number: number;
  text: string;
  currentStep: number;
}

export const ProgressPointer: FC<ProgressPointerProps> = ({ number, text, currentStep }) => {
  const checkIfHigher = (number: number, currentStep: number) => {
    return number <= currentStep ? 'primary.main' : 'neutral.300';
  };

  return (
    <Theme>
      <Stack alignItems={'center'} spacing={1} position="relative">
        <Box
          sx={{
            width: '20px',
            height: '20px',
            borderRadius: '20px',
            backgroundColor: checkIfHigher(number, currentStep),
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '4px 6px',
            color: 'primary.contrastText'
          }}
        >
          <Typography variant="caption">{number}</Typography>
          <Box position="absolute" top={25}>
            <Typography variant="body2" color="textSecondary" minWidth={'160px'}>
              {text}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Theme>
  );
};
