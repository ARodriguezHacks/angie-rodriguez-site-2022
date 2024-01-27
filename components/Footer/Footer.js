import footerStyles from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={ footerStyles.footer }>
      <nav className={ footerStyles.footerNav }>
        <ul className={ footerStyles.navList }>
          <li className={ footerStyles.navListItem }><a className={ footerStyles.navListItemLink }
            href="https://github.com/ARodriguezHacks"
          >
            Github
          </a></li>
          <li><a
            href="https://www.linkedin.com/in/angierodriguezdev/"
          >
            LinkedIn
          </a></li>
          {/* <li><a
            href="https://www.linkedin.com/in/angierodriguezdev/"
          >
            Substack
          </a></li> */}
          <li><a
            href="https://dev.to/arodriguezhacks"
          >
            DEV.to
          </a></li>
        </ul>
      </nav>
      <div className={ footerStyles.signature }>
        <p className={ footerStyles.copyright }><small>Copyright &copy;2023 Angie Rodriguez</small></p>
        <p>Made with love and lots of coffee</p>
      </div>
    </footer>
  );
}
