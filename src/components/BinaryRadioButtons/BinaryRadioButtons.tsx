import { RadioGroup } from '@mui/material';
import { FC } from 'react';
import { ILabelValue } from '../../interfaces/global';
import { Theme } from '../Theme';
import { Radio } from './components/Radio';

interface IBinaryRadioButtonsProps {
  handleRadioButtons: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: {
    first: ILabelValue;
    second: ILabelValue;
  };
}

const BinaryRadioButtons: FC<IBinaryRadioButtonsProps> = ({ handleRadioButtons, data }) => {
  return (
    <Theme>
      <RadioGroup onChange={handleRadioButtons} row>
        <Radio value={data.first.value} label={data.first.label} />
        <Radio value={data.second.value} label={data.second.label} />
      </RadioGroup>
    </Theme>
  );
};

export default BinaryRadioButtons;
