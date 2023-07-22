import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "./Button";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleScreenResize = function () {
    if (window.screen.width >= 768 && mobileNavOpen) {
      setMobileNavOpen(false);
    }
  };

  function toggleMobileNav() {
    setMobileNavOpen(!mobileNavOpen);
  }

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return function clean() {
      window.removeEventListener("resize", handleScreenResize);
    };
  });

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navListLogo}>
          <ul>
            <li className={`${styles.tabletHide} ${styles.desktopHide}`}>
              <Button toggleMobileNav={toggleMobileNav}>
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

        <div
          className={
            mobileNavOpen
              ? `${styles.mobileNavListOpened}`
              : `${styles.desktopNavListOpened}`
          }
        >
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
