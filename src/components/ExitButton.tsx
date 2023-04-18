import { useState, FC } from 'react';
import { Box, Modal } from '@mui/material';
import { SmallCardIcon } from './SmallCardIcon';
import { X } from '../icons/x';
import { ConfirmationModal } from './ConfirmationModal';
import { Theme } from './Theme';

interface IExitButtonProps {
  reset: () => void;
  goBack: () => void;
  recentChanges: boolean;
}

export const ExitButton: FC<IExitButtonProps> = ({ reset, goBack, recentChanges }) => {
  const buttonProps = {
    title: 'Estás a punto de salir sin guardar',
    subtitle: '',
    button1: 'Salir sin guardar',
    button2: 'Continuar editando'
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Theme>
      <Box
        sx={{
          position: 'absolute',
          left: '24px',
          top: '-6px'
        }}
        onClick={() => {
          if (!recentChanges) goBack();
          else setIsOpen(true);
        }}
      >
        <SmallCardIcon>
          <X />
        </SmallCardIcon>
      </Box>
      <Modal open={isOpen}>
        <ConfirmationModal
          buttonProps={buttonProps}
          close={() => setIsOpen(false)}
          resetFormState={reset}
          goBack={goBack}
        />
      </Modal>
    </Theme>
  );
};
