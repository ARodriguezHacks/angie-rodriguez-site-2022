import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/github">Github</Link>
      </nav>
    </header>
  );
}
