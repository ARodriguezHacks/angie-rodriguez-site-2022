import styles from "../styles/Home.module.scss";
import Hero from "../sections/Hero/hero";
import About from "../sections/About/about";
import Github from "../sections/Github/github";
import Portfolio from "../sections/Portfolio/portfolio";
import LinkedIn from "../sections/LinkedIn/linkedin";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <Hero styles={styles.about} />
        <About styles={styles.about} />
        <Portfolio styles={styles.portfolio} />
        <Github styles={styles.github} />
        <LinkedIn styles={styles.github} />
      </section>
    </main>
  );
}
