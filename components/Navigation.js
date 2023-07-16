import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navList}>
          <ul>
            <li className={styles.desktopHide}>Menu Mobile</li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navList}>
          <ul>
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
        </div>
      </nav>
    </header>
  );
}
