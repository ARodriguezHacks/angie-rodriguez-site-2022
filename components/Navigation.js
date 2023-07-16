import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Navigation() {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navListLogo}>
          <ul>
            <li className={`${styles.tabletHide} ${styles.desktopHide}`}>
              <Image
                src="/icons/menu.png"
                alt="hamburger menu icon"
                width="64"
                height="64"
              />
            </li>
            <li className={styles.mobileHide}>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <div className={`${styles.navList} ${styles.mobileNavList}`}>
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
