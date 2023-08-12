import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
// import backgroundPic from "../public/images/background.jpg";
import profilePic from "../public/images/cropped.png";

export default function About() {
  return (
    <div className={`${styles.sectionFlex} ${styles.about} ${styles.pageMargin}`} id="about">
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutCopy}>
          <p>Welcome!</p>
          <h2 className={styles.headingOne}>
            <span>About Me</span>
          </h2>
          <p>I&apos;m a former liberal arts major who discovered web design around 2016. Since then I&apos;m embarked on a lengthy journey to change careers and discover more of myself along the way.</p>
          <p>When I&apos;m not learning software engineering I love reading novels, playing with my cats Maggie and Thunder and jamming to video game music.</p>
          <button>
            <Link href="/about">Read more about my journey</Link>
          </button>
        </div>
        <div className={styles.aboutCopy}>
          <p>Personal Timeline:</p>
          <ul>
            <li>2016 Became interested in web design as a career while interning in Spain</li>
            <li>2018 Moved to the Pacific Northwest</li>
            <li>2018 Started my coding bootcamp</li>
            <li>2019 Graduated from bootcamp</li>
            <li>2021 Secured first full-time developer role</li>
          </ul>
          <button>
            <Link href="/about">Read more about my journey</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
