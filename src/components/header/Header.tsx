import { UseSettings } from 'contexts/SettingsContext';
// icons
import { LiaLanguageSolid } from 'react-icons/lia';
import { LiaSunSolid } from 'react-icons/lia';
import { LiaMoonSolid } from 'react-icons/lia';

// css
import styles from './Header.module.scss';
import { UseTranslate } from 'contexts/TranslatorProvider';

export default function Header() {
  const { theme, setTheme } = UseSettings();
  const { setLang } = UseTranslate();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    document.querySelector('#root')?.classList.toggle(styles[theme]);
  };

  const handleLanguageChange = (language: string) => {
    setLang(language == 'ptBr' ? 'pt-br' : 'en');
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href='#apresentacao'>Apresentação</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contato'>Contato</a>
          </li>
          <li>
            <a href='#outro'>Outro</a>
          </li>
          <li>
            <a href='#' onClick={toggleTheme}>
              {theme === 'light' ? (
                <LiaMoonSolid className={styles.icons} size={30} />
              ) : (
                <LiaSunSolid className={styles.icons} size={30} />
              )}
            </a>
          </li>
          <li>
            <a href='#'>
              <LiaLanguageSolid className={styles.icons} size={30} />
            </a>
            <ul>
              <li onClick={() => handleLanguageChange('ptBr')}>ptBr</li>
              <li onClick={() => handleLanguageChange('en')}>en</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
