import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/github">Github</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
