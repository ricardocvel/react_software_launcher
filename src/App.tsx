import { useState, useEffect } from 'react';

import styles from './style/App.module.scss';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './routes/Routes.routing';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(old => (old === 'light' ? 'dark' : 'light'));
    document.querySelector('#root')?.classList.toggle(styles[theme]);
    navigate('home');
  };

  useEffect(() => {
    document.querySelector('#root')?.classList.add(styles[theme]);
  }, [theme]);

  return (
    <div className='App'>
      <header className='App-header'>
        <p className={styles.title}>Teste</p>
      </header>
      <body>
        <button onClick={toggleTheme}> thema{theme}</button>
        <AppRoutes />
      </body>
    </div>
  );
}

export default App;
