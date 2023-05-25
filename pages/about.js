/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.scss";

// incorporate using GraphQL ?
export default function About() {
  return (
    <div className={styles.container}>
      <section className={styles.about}>
        <h1>My Name is Angie</h1>
        <p>
          I've been a front end developer for over 1 year, professionally. I
          enjoy web development and am excited to keep learning more about
          software engineering.
        </p>
      </section>
    </div>
  );
}
