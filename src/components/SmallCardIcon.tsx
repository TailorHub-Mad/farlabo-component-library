import { IconButton } from '@mui/material';
import { FC } from 'react';
import { Theme } from './Theme';

interface ISmallCardIconProps {
  children: JSX.Element;
  onClick?: () => void;
}

export const SmallCardIcon: FC<ISmallCardIconProps> = (props) => {
  const { children, onClick } = props;
  return (
    <Theme>
      <IconButton
        sx={{
          backgroundColor: 'white',
          background: '#FFFFFF',
          border: '1px solid #D1D5DB',
          borderRadius: '8px',
          width: 36,
          height: 36
        }}
        onClick={onClick}
      >
        {children}
      </IconButton>
    </Theme>
  );
};
