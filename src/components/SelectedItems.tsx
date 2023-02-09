import { Button, Grid, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Close } from '@mui/icons-material';
import { Theme } from './Theme';

interface ISelectedItemsTexts {
  none: string;
  singular: string;
  plural: string;
}

interface SelectedItemsProps {
  selectedArr: string[];
  handleRemoveItem: (item: string, idx: number) => void;
  texts: ISelectedItemsTexts;
  mt?: string;
}

export const SelectedItems: FC<SelectedItemsProps> = ({
  selectedArr,
  handleRemoveItem,
  texts,
  mt
}) => {
  const returnTitle = (): string => {
    if (selectedArr.length === 1) return `1 ${texts.singular}`;
    else return `${selectedArr.length} ${texts.plural}`;
  };

  return selectedArr?.length ? (
    <Theme>
      <Grid item md={12} xs={6} sx={{ mt, width: '100%' }}>
        <Typography variant="caption" color={'#3741517A'}>
          {returnTitle()}
        </Typography>
        <Stack mt={1}>
          {selectedArr.map((item: string, idx: number) => (
            <Stack
              direction={'row'}
              alignItems="center"
              justifyContent={'space-between'}
              key={item}
            >
              <Typography variant="body1">{item}</Typography>
              <Button
                variant="text"
                endIcon={<Close />}
                onClick={() => handleRemoveItem(item, idx)}
              >
                Eliminar
              </Button>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Theme>
  ) : (
    <Theme>
      <Grid item>
        <Typography variant="caption" color={'#3741517A'}>
          {texts.none}
        </Typography>
      </Grid>
    </Theme>
  );
};
