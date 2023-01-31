import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ChevronRight } from '../icons/chevron-right';
import { Clock } from '../icons/clock';
import { SeverityPill } from './SeverityPill';
import { Theme } from './Theme';

export const MarketingCard: FC = () => {
  return (
    <Theme>
      <Card
        variant="elevation"
        sx={{
          height: '158px',
          padding: '24px',
          border: '1px solid #E6E8F0',
          boxShadow: '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1'
        }}
      >
        <Stack>
          <Stack direction={'row'} justifyContent="space-between">
            <Stack direction={'row'} spacing={1}>
              <SeverityPill isTag>En activo</SeverityPill>
            </Stack>
            <Box>
              <ChevronRight />
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Stack>
              <Typography variant="body1"></Typography>
              <Stack direction={'row'} alignItems={'center'} spacing={1}>
                <Avatar sx={{ width: 20, height: 20 }} src={'image'} />
                <Typography variant="caption" color={'rgba(55, 65, 81, 0.48)'}>
                  Nombre responsable
                </Typography>
                <Clock />
                <Typography variant="caption" color={'rgba(55, 65, 81, 0.48)'}>
                  15/072002 - 15/07/2022
                </Typography>
              </Stack>
            </Stack>
            <Box>
              <Typography variant="body2" color={'#6B7280'}></Typography>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </Theme>
  );
};
