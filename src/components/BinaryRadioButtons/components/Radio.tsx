import { FormControlLabel, Radio as RadioMUI, Typography } from '@mui/material';
import { FC } from 'react';
import { Theme } from '../../Theme';

interface IRadioProps {
  label: string;
  value: string;
  selected: string;
}

export const Radio: FC<IRadioProps> = ({ label, value, selected }) => {
  return (
    <Theme>
      <FormControlLabel
        value={value}
        control={<RadioMUI />}
        label={<Typography variant={'body2'}>{label}</Typography>}
        checked={value === selected}
      />
    </Theme>
  );
};
