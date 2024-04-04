import { useMemo, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ThemeContextMode } from '../shared/contextTheme/ThemeContextMode';

import { AppRouter } from './router/app-router';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(
    () => ({ theme, toggleThemeMode: toggleTheme }),
    [theme, toggleTheme],
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
