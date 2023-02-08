import { FormControlLabel, Radio as RadioMUI, Typography } from '@mui/material';
import { FC } from 'react';
import { ILabelValue } from '../../../interfaces/global';
import { Theme } from '../../Theme';

export const Radio: FC<ILabelValue> = ({ label, value }) => {
  return (
    <Theme>
      <FormControlLabel
        value={value}
        control={<RadioMUI />}
        label={<Typography variant={'body2'}>{label}</Typography>}
      />
    </Theme>
  );
};
