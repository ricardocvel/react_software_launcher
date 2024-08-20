import {} from 'react';
import styles from './style/App.module.scss';
import { AppRoutes } from './routes/Routes.routing';
import { TranslatorProvider } from 'contexts/TranslatorProvider';
import { SettingsProvider } from 'contexts/SettingsContext';

function App() {
  // guardado para uso futuro
  // import { useNavigate } from 'react-router-dom';
  // const navigate = useNavigate();
  //   if (location.href.includes('page_two')) {
  //     navigate('/');
  //   } else {
  //     navigate('/page_two');
  //   }

  return (
    <div className={styles.App}>
      <TranslatorProvider>
        <SettingsProvider>
          <AppRoutes />
        </SettingsProvider>
      </TranslatorProvider>
    </div>
  );
}

export default App;
