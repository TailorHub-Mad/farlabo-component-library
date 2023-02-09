import { RadioGroup } from '@mui/material';
import { FC } from 'react';
import { ILabelValueChecked } from '../../interfaces/global';
import { Theme } from '../Theme';
import { Radio } from './components/Radio';

interface IBinaryRadioButtonsProps {
  handleRadioButtons: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    first: ILabelValueChecked;
    second: ILabelValueChecked;
  };
}

export const BinaryRadioButtons: FC<IBinaryRadioButtonsProps> = ({ handleRadioButtons, data }) => {
  return (
    <Theme>
      <RadioGroup onChange={handleRadioButtons} row>
        <Radio value={data.first.value} label={data.first.label} checked={data.first.checked} />
        <Radio value={data.second.value} label={data.second.label} checked={data.second.checked} />
      </RadioGroup>
    </Theme>
  );
};
