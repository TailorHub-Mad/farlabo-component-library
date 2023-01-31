import { ThemeProvider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { SettingsConsumer } from '../contexts/settings-context';
import { createTheme } from '../theme';

export const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SettingsConsumer>
      {({ settings }) => (
        <ThemeProvider
          theme={createTheme({
            direction: settings.direction,
            responsiveFontSizes: settings.responsiveFontSizes,
            mode: settings.theme
          })}
        >
          {children}
        </ThemeProvider>
      )}
    </SettingsConsumer>
  );
};
