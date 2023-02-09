import { RadioGroup } from '@mui/material';
import { FC } from 'react';
import { ILabelValue } from '../../interfaces/global';
import { Theme } from '../Theme';
import { Radio } from './components/Radio';

interface IBinaryRadioButtonsProps {
  handleRadioButtons: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: string;
  data: {
    first: ILabelValue;
    second: ILabelValue;
  };
}

export const BinaryRadioButtons: FC<IBinaryRadioButtonsProps> = ({
  handleRadioButtons,
  selected,
  data
}) => {
  return (
    <Theme>
      <RadioGroup onChange={handleRadioButtons} row>
        <Radio value={data.first.value} label={data.first.label} selected={selected} />
        <Radio value={data.second.value} label={data.second.label} selected={selected} />
      </RadioGroup>
    </Theme>
  );
};
