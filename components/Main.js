import styles from "../styles/Home.module.scss";
import Hero from "../sections/hero";
import About from "../sections/about";
import Github from "../sections/github";
import Portfolio from "../sections/portfolio";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <Hero styles={styles.about} />
        <About styles={styles.about} />
        <Portfolio styles={styles.portfolio} />
        <Github styles={styles.github} />
      </section>
    </main>
  );
}
