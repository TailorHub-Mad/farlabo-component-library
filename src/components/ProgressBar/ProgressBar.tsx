import { Box, LinearProgress } from '@mui/material';
import { FC } from 'react';
import { ProgressPointer } from './components/ProgressPointer';
import { Theme } from '../Theme';

interface ProgressStep {
  number: number;
  text: string;
}

interface ProgressBarProps {
  steps: ProgressStep[];
  currentStep: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ steps, currentStep }) => {
  const calculateFillBar = () => {
    const totalSteps = steps.length;
    const stepDistance = 100 / (totalSteps + 1);
    const initialPlacement = stepDistance;

    if (currentStep === 0) return initialPlacement;
    else return initialPlacement + stepDistance * currentStep;
  };

  return (
    <Theme>
      <Box
        style={{
          position: 'relative'
        }}
      >
        <Box display={'flex'} justifyContent="space-evenly">
          {steps.map((step, index) => (
            <ProgressPointer currentStep={currentStep} number={step.number} text={step.text} key={index} />
          ))}
        </Box>
        <Box
          style={{
            position: 'absolute',
            zIndex: -1,
            width: '100%'
          }}
        >
          <LinearProgress variant="buffer" color="primary" value={calculateFillBar()} sx={{ top: -13 }} />
        </Box>
      </Box>
    </Theme>
  );
};
