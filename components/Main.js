import styles from "../styles/Home.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <h2>Basic Facts</h2>
        <p>2018</p>
      </div>
      <div className={styles.skills}>
        <h2>Angie Rodriguez</h2>
        <p>Front End Software Engineer based around Portland, OR.</p>
      </div>
      <div>
        <h1>Angie Rodriguez</h1>
        <p>Front End Software Engineer based around Portland, OR.</p>
      </div>
    </main>
  );
}
