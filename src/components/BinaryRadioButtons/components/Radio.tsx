import { FormControlLabel, Radio as RadioMUI, Typography } from '@mui/material';
import { FC } from 'react';
import { ILabelValueChecked } from '../../../interfaces/global';
import { Theme } from '../../Theme';

export const Radio: FC<ILabelValueChecked> = ({ label, value, checked }) => {
  return (
    <Theme>
      <FormControlLabel
        value={value}
        control={<RadioMUI />}
        label={<Typography variant={'body2'}>{label}</Typography>}
        checked={checked}
      />
    </Theme>
  );
};
