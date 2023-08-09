import styles from "../styles/Home.module.scss";
import About from "../sections/about";
import Github from "../sections/github";
import Portfolio from "../sections/portfolio";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <About styles={styles.about} />
        <Github styles={styles.github} />
        <Portfolio styles={styles.portfolio} />
      </section>
    </main>
  );
}
