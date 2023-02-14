import React, { Dispatch, FC, SetStateAction } from 'react';
import { Box, Typography } from '@mui/material';
import { BoxProps } from '@mui/system';
import { X } from '../icons/x';
import TrendingUpArrow from '../icons/trending-up-arrow';
import Warning from '../icons/warning';

type TVariant = 'info' | 'warning';

type TMessage = {
  text: string;
  weight?: number;
};

interface TInformativeMessageProps extends BoxProps {
  variant: TVariant;
  textArr: TMessage[];
  button?: React.ReactNode;
  minWidth?: string;
  onPressClose?: Dispatch<SetStateAction<boolean>>;
}

const ICONS = {
  info: {
    icon: TrendingUpArrow as React.ElementType<React.SVGProps<{}>>,
    bgColor: 'rgba(100, 182, 247, 0.1)',
    iconBgColor: '#64B6F7'
  },
  warning: {
    icon: Warning as React.ElementType<React.SVGProps<{}>>,
    bgColor: 'rgba(253, 58, 105, 0.1)',
    iconBgColor: '#FD3A69'
  }
};

export const InformativeMessage: FC<TInformativeMessageProps> = ({
  variant,
  textArr,
  button,
  minWidth,
  onPressClose,
  ...props
}) => {
  const Icon = ICONS[variant].icon;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...props }}>
      <Box
        bgcolor={ICONS[variant].bgColor}
        minHeight={60}
        px={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        minWidth={minWidth || '522px'}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            bgcolor={ICONS[variant].iconBgColor}
            borderRadius={50}
            minWidth={40}
            minHeight={40}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            mr={2}
          >
            <Icon />
          </Box>
          <Box>
            {textArr.map((text, idx) => (
              <Typography
                fontWeight={text.weight}
                style={{ display: 'inline' }}
                key={`${text.text.substring(0, 10)}-${idx}`}
              >
                {text.text}
                &nbsp;
              </Typography>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {button && <Box ml={2}>{button}</Box>}
          {onPressClose && (
            <Box
              onClick={() => onPressClose(false)}
              sx={{ display: 'flex', alignItems: 'center', ml: 2, cursor: 'pointer' }}
            >
              {/* TODO: X size should be 20x20 */}
              <X />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
