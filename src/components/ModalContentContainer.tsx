import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Theme } from './Theme';

type TModalContentContainerProps = {};

export const ModalContentContainer: FC<PropsWithChildren<TModalContentContainerProps>> = ({ children }) => {
  return (
    <Theme>
      <Box
        sx={{
          borderRadius: '8px',
          boxShadow: '0px 25px 50px rgba(100, 116, 139, 0.25)',
          padding: '24px',
          width: '600px',
          background: '#ffffff',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-25%, -50%)'
        }}
      >
        {children}
      </Box>
    </Theme>
  );
};
