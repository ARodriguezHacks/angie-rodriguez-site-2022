import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <a
          href="https://github.com/ARodriguezHacks"
        >
          Github
        </a>
      </nav>
    </footer>
  );
}
