import footerStyles from "./footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMugHot, faHeart, faCoffee} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faUpwork } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={ footerStyles.footer }>
      <nav className={ footerStyles.footerNav }>
        <ul className={ footerStyles.navList }>
          <li><a href="https://github.com/ARodriguezHacks"><FontAwesomeIcon icon={ faGithub } size="xl"/></a></li>
          <li><a href="https://www.linkedin.com/in/angierodriguezdev/"><FontAwesomeIcon icon={ faLinkedin } size="xl" /></a></li>
          {/* <li><a
            href="https://www.linkedin.com/in/angierodriguezdev/"
          >
            Substack
          </a></li> */}
          {/* <li><a
            href="https://dev.to/arodriguezhacks"
          >
            DEV.to
          </a><FontAwesomeIcon icon={ faUpwork } size="xl" /></li> */}
          <li><a href="https://www.upwork.com/freelancers/~01d0a3ae04d08794ae?mp_source=share"><FontAwesomeIcon icon={ faUpwork } size="xl" /></a></li>
        </ul>
      </nav>
      <div className={ footerStyles.signature }>
        <p className={ footerStyles.copyright }><small>Copyright &copy;2024 Angie Rodriguez</small></p>
        <p>Made with <FontAwesomeIcon icon={ faHeart } size="lg" color='#f3ef96' /> and lots of  <FontAwesomeIcon icon={ faCoffee } size="lg" color='brown' /></p>
      </div>
    </footer>
  );
}
