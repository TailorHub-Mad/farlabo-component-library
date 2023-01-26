import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { X } from '../icons/x';

type TModalTitleAndXProps = {
  text: string;
  onClick: () => void;
};

export const ModalTitleAndX: FC<TModalTitleAndXProps> = ({ text, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6" component="h2">
        {text}
      </Typography>
      <X cursor="pointer" onClick={onClick} />
    </Box>
  );
};
