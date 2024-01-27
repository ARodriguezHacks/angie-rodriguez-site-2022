import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useEffect, forwardRef } from "react";
import Logo from "../public/Print_Transparent-2.svg";


const MyImageLink = forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Image src={Logo} alt="logo" width={80} height={80} />
    </a>
  )
})
MyImageLink.displayName = "MyImageLink"

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
            <li className={`${styles.tabletHide} ${styles.desktopHide} ${styles.buttonLogo}`}>
              <button onClick={toggleMobileNav} className={`${styles.button}`}><Image src={Logo} alt="logo" width={80} height={80} /></button>
            </li>
            <li className={`${styles.mobileHide} ${styles.buttonLogo}`}>
              <Link href="/" passHref legacyBehavior>
                <MyImageLink />
              </Link>
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
              <Link href="#about">About Me</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#github">Github</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
