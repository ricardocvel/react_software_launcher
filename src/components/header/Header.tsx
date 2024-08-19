import { UseSettings } from 'contexts/SettingsContext';
// icons
import { LiaLanguageSolid } from 'react-icons/lia';
import { LiaSunSolid } from 'react-icons/lia';
import { LiaMoonSolid } from 'react-icons/lia';

// css
import styles from './Header.module.scss';
import { UseTranslate } from 'contexts/TranslatorProvider';

//resume

export default function Header() {
  const { theme, setTheme } = UseSettings();
  const { setLang, translate } = UseTranslate();

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
        <div className={styles.divItems}>
          <a href='#presentation'>{translate.Presentation}</a>
        </div>
        <div>
          <ul>
            <li>
              <a href='#presentation'>{translate.Presentation}</a>
            </li>
            <li>
              <a href='#about'>{translate.About}</a>
            </li>
            <li>
              <a href='#contact'>{translate.Contact}</a>
            </li>
            <li>
              <a href='#'>{translate.Resume}</a>
              <ul>
                <li>
                  <a href='/pt_resume.pdf' download='pt_resume.pdf'>
                    pt
                  </a>
                </li>
                <li>
                  <a href='/en_resume.pdf' download='en_resume.pdf'>
                    en
                  </a>
                </li>
                <li>
                  <a href='/es_resume.pdf' download='es_resume.pdf'>
                    es
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul>
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
                <li>
                  <a onClick={() => handleLanguageChange('ptBr')}>pt</a>
                </li>
                <li>
                  <a onClick={() => handleLanguageChange('en')}>en</a>
                </li>
                <li>
                  <a onClick={() => handleLanguageChange('es')}>es</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
