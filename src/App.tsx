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
    if ( location.href.includes('portifolio')) {
      navigate('/');
    } else {
      navigate('/portifolio');
    }
  };

  useEffect(() => {
    document.querySelector('#root')?.classList.add(styles[theme]);
  }, [theme]);

  console.log(styles);
  

  return (
    <div className='App'>
      <header className='App-header'>
        <p className={styles.title}>Teste</p>
      </header>
      <body>
        <button onClick={toggleTheme}> thema{theme}</button>
        <a href="#ovo">vai para o ovo</a>
        <AppRoutes />

        <div style={{
          height: '500vh',
          width: '100%'
        }}> 
        
        <p id='ovo' style={{marginTop: '2000px'}}>patos so que ovo</p>
        </div>
      </body>
    </div>
  );
}

export default App;
