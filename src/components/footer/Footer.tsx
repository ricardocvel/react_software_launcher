import { UseTranslate } from 'contexts/TranslatorProvider';
import style from './Footer.module.scss';

import { LiaGithub } from 'react-icons/lia';
import { LiaLinkedinIn } from 'react-icons/lia';
import { TbBrandYoutube } from 'react-icons/tb';

export default function Footer() {
  /** Receives translate model  */
  const { translate } = UseTranslate();

  return (
    <footer className={style.footer}>
      <div>
        <p>&copy; 2024 Ricardo Campos. {translate.textFooter}</p>
        <a href='https://github.com/ricardocvel'>
          <LiaGithub className={style.icons} size={20} />
        </a>
        <a href='https://www.linkedin.com/in/ricardocvel/'>
          <LiaLinkedinIn className={style.icons} size={20} />
        </a>
        <a href='https://www.youtube.com/@ricardocamposdev'>
          <TbBrandYoutube className={style.icons} size={20} />
        </a>
      </div>
    </footer>
  );
}
