// import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={ styles.footer }>
      <nav className={ footerStyles.footerNav }>
        <ul className={ footerStyles.navList }>
          <li className={ footerStyles.navListItem }><a className={ footerStyles.navListItemLink }
            href="https://github.com/ARodriguezHacks"
          >
            Github
          </a></li>
          <li><a
            href="https://github.com/ARodriguezHacks"
          >
            LinkedIn
          </a></li>
          <li><a
            href="https://www.linkedin.com/in/angierodriguezdev/"
          >
            Substack
          </a></li>
          <li><a
            href="https://github.com/ARodriguezHacks"
          >
            DEV.to
          </a></li>
        </ul>
      </nav>
    </footer>
  );
}
