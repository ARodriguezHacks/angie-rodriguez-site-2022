import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "./Button";
import { useState } from "react";

export default function Navigation() {
  // const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navListLogo}>
          <ul>
            <li className={`${styles.tabletHide} ${styles.desktopHide}`}>
              <Button>
                <Image
                  src="/icons/menu.png"
                  alt="hamburger menu icon"
                  width="32"
                  height="32"
                />
              </Button>
            </li>
            <li className={styles.mobileHide}>
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
