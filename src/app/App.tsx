import { useMemo, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ThemeContextMode } from '../shared/contextTheme/ThemeContextMode';
import { AppRouter } from './router/AppRouter';

function App() {
  const [theme, setTheme] = useState('dark');

  const value = useMemo(
    () => ({
      theme,
      toggleThemeMode: () => {
        setTheme((currentTheme) =>
          currentTheme === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [theme],
  );

  return (
    <div>
      <ThemeContextMode.Provider value={value}>
        <Header />
      </ThemeContextMode.Provider>
      <AppRouter />
    </div>
  );
}

export default App;
