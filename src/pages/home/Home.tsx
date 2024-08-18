import { useEffect, useState } from 'react';

import Header from 'components/header/Header';
import styles from './Home.module.scss';
import Footer from 'components/footer/Footer';

//contexts
import { UseTranslate } from 'contexts/TranslatorProvider';

//photos
import photo01 from 'assets/images/photo_001.png';
import photo02 from 'assets/images/photo_002.png';
import photo03 from 'assets/images/photo_003.png';
import photo04 from 'assets/images/photo_004.png';

import { LiaWhatsapp } from 'react-icons/lia';
import { LiaHomeSolid } from 'react-icons/lia';
import { GrMailOption } from 'react-icons/gr';
import { LiaGithub } from 'react-icons/lia';
import { LiaLinkedinIn } from 'react-icons/lia';
import { LiaYoutube } from 'react-icons/lia';

const images = [photo02, photo03, photo04];

export default function Home() {
  /** Receives translate model  */
  const { translate } = UseTranslate();

  // photo about
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
      <Header />

      {/* Presentation */}
      <section id='presentation' className={styles.presentation}>
        <div className={styles.description}>
          <p className={styles.title1}>
            {translate.Hello}, {translate.welcome}
          </p>
          <h1>{translate.Im} Ricardo Campos</h1>
          <p className={styles.text1}>{translate.text1}</p>
          <a href='#contact' className={styles.btnOne}>
            {translate.Contact}
          </a>
        </div>
        <div className={styles.containerImg}>
          <div>
            <img src={photo01} alt='image of the author' style={{ width: '35rem', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* About */}
      <section id='about' className={styles.about}>
        <div className={styles.aboutContainerImg}>
          <div>
            <img src={images[currentIndex]} alt='image of the author' style={{ width: '30rem', height: '30rem' }} />
            <button className={styles.prevButton} onClick={handlePrev}>
              ‹
            </button>
            <button className={styles.nextButton} onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
        <div className={styles.aboutDescription}>
          <h1 className={styles.center}>{translate.About}</h1>
          <p>{translate.text2}</p>
          <p>{translate.text3}</p>
          <p>{translate.text4}</p>
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className={styles.contact}>
        <div className={styles.contactDescription}>
          <div className={styles.contactLinks}>
            <h1 className={styles.center}>{translate.Contact}</h1>
            <p>{translate.text5}</p>
          </div>
          <div className={styles.contactItems}>
            <ul>
              <li>
                <a href='https://api.whatsapp.com/send?phone=5548988719026&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site!'>
                  <LiaWhatsapp className={styles.icons} size={40} />
                  <p>+55 48 988719026</p>
                </a>
              </li>
              <li>
                <a href='ricardocampos_pr@live.com'>
                  <GrMailOption className={styles.icons} size={40} />
                  <p>ricardocampos_pr@live.com</p>
                </a>
              </li>
              <li>
                <a>
                  <LiaHomeSolid className={styles.icons} size={40} />
                  <p>Florianópolis SC - Brasil</p>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://github.com/ricardocvel'>
                  <LiaGithub className={styles.icons} size={40} />
                  <p>@ricardocvel</p>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/ricardocvel/'>
                  <LiaLinkedinIn className={styles.icons} size={40} />
                  <p>ricardocvel</p>
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/@ricardocamposdev'>
                  <LiaYoutube className={styles.icons} size={40} />
                  <p>@ricardocamposdev</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.containerImg}>
          <div>
            <img src={photo01} alt='image of the author' style={{ width: '35rem', height: 'auto' }} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
