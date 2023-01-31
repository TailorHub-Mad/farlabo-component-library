import { Typography } from '@mui/material';
import { Variant as TypographyVariant } from '@mui/material/styles/createTypography';
import { Box } from '@mui/system';
import { FC } from 'react';
import { X } from '../icons/x';

type TModalTitleAndXProps = {
  text: string;
  onClick: () => void;
  textVariant?: TypographyVariant;
  mb?: number;
};

export const ModalTitleAndX: FC<TModalTitleAndXProps> = ({ text, onClick, textVariant, mb }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: mb ? `${mb}px` : ''
      }}
    >
      <Typography variant={textVariant || 'h6'} component="h2">
        {text}
      </Typography>
      <X cursor="pointer" onClick={onClick} />
    </Box>
  );
};
