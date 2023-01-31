import { Box, Breadcrumbs, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { ChevronRight } from '../icons/chevron-right';

type TTopBarProps = {
  paths: string[];
};

export const TopBar: FC<PropsWithChildren<TTopBarProps>> = ({ children, paths }) => {
  const formatPaths = (paths: string[]): JSX.Element[] => {
    return paths.map((path, idx) => {
      const shouldBeGray = idx === paths.length - 1 && paths.length > 1;
      return (
        <Stack direction="row" key={idx}>
          <Typography
            variant="subtitle2"
            sx={{
              color: shouldBeGray ? '' : 'primary.dark'
            }}
          >
            {path}
          </Typography>
        </Stack>
      );
    });
  };

  const displayBreadCrumbs = (paths: string[]) => {
    const pathFormatted = formatPaths(paths);

    return (
      <Breadcrumbs aria-label={'breadcrumb'} separator={<ChevronRight />}>
        {pathFormatted}
      </Breadcrumbs>
    );
  };

  const isInvalidPath = () => {
    const pathsFiltered = paths.filter((path) => !path);
    return pathsFiltered.length > 0;
  };

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={{
        padding: '12px 24px',
        width: '100%',
        border: '2px solid #F3F4F6',
        minHeight: '72px'
      }}
    >
      <Box visibility={isInvalidPath() ? 'hidden' : 'visible'}>{displayBreadCrumbs(paths)}</Box>
      <Box>{children}</Box>
    </Stack>
  );
};
