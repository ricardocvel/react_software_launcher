import Header from 'components/header/Header';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section id='apresentacao'>
          <h1>Bem-vindo à Minha Página Pessoal</h1>
          <p>Esta é a seção de apresentação onde você pode introduzir-se brevemente.</p>
        </section>

        <section id='about'>
          <h2>Sobre Mim</h2>
          <p>Um breve resumo sobre quem você é, suas experiências e hobbies.</p>
        </section>

        <section id='contato'>
          <h2>Contato</h2>
          <p>Entre em contato através das redes sociais ou email abaixo.</p>
        </section>
      </main>

      <footer className={styles.button}>
        <p>&copy; 2024 Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
