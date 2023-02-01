import { Box, Button, Stack } from '@mui/material';
import { FC } from 'react';
import { Theme } from './Theme';

interface FooterFormProps {
  handleSubmit: (action: string) => void;
  step: number;
  maxSteps: number;
  text: string;
  isFinished: boolean;
}

export const FooterForm: FC<FooterFormProps> = ({ handleSubmit, step, maxSteps, text, isFinished }) => {
  const submitAndScrollTop = (reason: string) => {
    handleSubmit(reason);
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  return (
    <Theme>
      <Box position="fixed" bottom="0" left="0" bgcolor={'#fff'} width={'100%'} zIndex={5} minHeight="74px">
        <Box
          sx={{
            justifyContent: 'flex-end',
            display: 'flex',
            padding: ' 16px 24px',
            boxShadow: ' 0px -1px 1px rgba(100, 116, 139, 0.06), 0px -1px 2px rgba(100, 116, 139, 0.1);'
          }}
        >
          <Stack direction={'row'} spacing={'16px'}>
            {step !== 0 && (
              <Button variant="outlined" onClick={() => handleSubmit('back')}>
                Atrás
              </Button>
            )}

            {step < maxSteps ? (
              <Button variant="contained" onClick={() => submitAndScrollTop('continue')} disabled={!isFinished}>
                Continuar
              </Button>
            ) : (
              <Button onClick={() => handleSubmit('submit')} variant="contained" disabled={!isFinished}>
                {text}
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </Theme>
  );
};
