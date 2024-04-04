import React from 'react';

export const ThemeContextMode = React.createContext({
  theme: 'dark',
  toggleThemeMode: () => {},
});
