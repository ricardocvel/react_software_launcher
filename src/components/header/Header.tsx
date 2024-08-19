import { UseSettings } from 'contexts/SettingsContext';
// icons
import { LiaLanguageSolid } from 'react-icons/lia';
import { LiaSunSolid } from 'react-icons/lia';
import { LiaMoonSolid } from 'react-icons/lia';
import { ImYoutube2 } from 'react-icons/im';
// import { FaYoutube } from "react-icons/fa";
import { FaGithubAlt } from 'react-icons/fa6';

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
  };

  const handleLanguageChange = (language: string) => {
    setLang(language == 'pt-br' ? 'pt-br' : language == 'en' ? 'en' : 'es');
  };

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.divItems}>
          <div className={styles.divLeft}>
            <a href='https://www.youtube.com/@ricardocamposdev'>
              <ImYoutube2 className={styles.youtube} size={60} />
            </a>
            <a href='https://github.com/ricardocvel'>
              <FaGithubAlt className={styles.github} size={35} />
            </a>
          </div>
          {/* <a href='#presentation'>{translate.Presentation}</a> */}
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
                  <a onClick={() => handleLanguageChange('pt-br')}>pt</a>
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
