import { UseTranslate } from 'contexts/TranslatorProvider';
import style from './Footer.module.scss';

export default function Footer() {
  /** Receives translate model  */
  const { translate } = UseTranslate();

  return (
    <footer className={style.footer}>
      <p>&copy; 2024 Ricardo Campos. {translate.textFooter}</p>
    </footer>
  );
}
