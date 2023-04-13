import styles from "../styles/Home.module.scss";

export default function Main() {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <div className={styles.about}>
          <h2>Basic Facts</h2>
          <ul>
            <li>2018 Moved to Pacifc Northwest</li>
            <li>2018 Started my coding bootcamp</li>
            <li>Graduated from said bootcamp</li>
          </ul>
        </div>
        <div className={styles.skills}>
          <h2>Angie Rodriguez</h2>
          <p>Front End Software Engineer based around Portland, OR.</p>
        </div>
        <div>
          <h1 className={styles.headingOne}>Angie Rodriguez</h1>
          <p>Front End Software Engineer based around Portland, OR.</p>
        </div>
      </section>
      <section className={styles.mainMid}>
        <div>
          <h2>More Fun Facts</h2>
          <ul>
            <li>2018 Moved to Pacifc Northwest</li>
            <li>2018 Started my coding bootcamp</li>
            <li>Graduated from said bootcamp</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
