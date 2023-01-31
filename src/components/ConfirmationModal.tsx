import { FC } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { ModalTitleAndX } from './ModalTitleAndX';
import { ModalContentContainer } from './ModalContentContainer';
import { TButtonProps } from '../types/button.type';
import { Theme } from './Theme';

type TConfirmationModalProps = {
  buttonProps: TButtonProps;
  close: () => void;
  resetFormState: () => void;
  goBack: () => void;
};

export const ConfirmationModal: FC<TConfirmationModalProps> = (props) => {
  const {
    buttonProps: { title, subtitle, button1, button2 },
    close,
    resetFormState,
    goBack
  } = props;

  return (
    <Theme>
      <ModalContentContainer>
        <ModalTitleAndX text={title || ''} onClick={close} textVariant={'h5'} />
        <Typography variant="body2" sx={{ mt: 2 }}>
          {subtitle}
        </Typography>
        <Box sx={{ mt: 4, float: 'right' }}>
          {button1 && (
            <Button
              variant="text"
              sx={{ mr: 2 }}
              onClick={() => {
                resetFormState();
                goBack();
              }}
            >
              {button1}
            </Button>
          )}

          {button2 && (
            <Button variant="contained" onClick={close}>
              {button2}
            </Button>
          )}
        </Box>
      </ModalContentContainer>
    </Theme>
  );
};
