import { Box, ContainerProps, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Theme } from '../Theme';
import { CircleWithNumber } from './components/CircleWithNumber';

interface FormSubSectionContainerProps extends ContainerProps {
  title: string;
  subtitle?: string;
  number: number;
}

export const FormSubSectionContainer: FC<PropsWithChildren<FormSubSectionContainerProps>> = ({
  title,
  subtitle,
  number,
  children
}) => {
  return (
    <Theme>
      <Stack direction={'row'}>
        <CircleWithNumber number={number} />
        <Box sx={{ ml: 3 }}>
          <Typography variant="overline">{title}</Typography>
          {subtitle && (
            <Typography variant="subtitle2" color={'#6B7280'}>
              {subtitle}
            </Typography>
          )}
          {children}
        </Box>
      </Stack>
    </Theme>
  );
};
