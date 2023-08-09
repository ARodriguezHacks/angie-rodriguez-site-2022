import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import backgroundPic from "../public/images/background.jpg";
import profilePic from "../public/images/cropped.png";

export default function About() {
  return (
    <div className={`${styles.sectionFlex} ${styles.about}`} id="about">
      <div style={{ position: "absolute" }}>
        <Image
          src={backgroundPic}
          alt="Body of water and a bridge"
          placeholder="blur"
          style={{ objectFit: "cover", opacity: 0.5 }}
        />
      </div>
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutCopy}>
          <p>Welcome!</p>
          <h1>
            <span>My name is</span> Angie Rodriguez
          </h1>
          <p>
            I&apos;m a software engineer based in the PNW. I love working in
            React.js, TypeScript and more.
          </p>
          <p>Personal Timeline:</p>
          <ul>
            <li>2018 Moved to the Pacific Northwest</li>
            <li>2018 Started my coding bootcamp</li>
            <li>2019 Graduated from bootcamp</li>
            <li>2021 Secured first full-time developer role</li>
          </ul>
          <button>
            <Link href="/about">Read more about my journey</Link>
          </button>
        </div>
        <div className={styles.aboutProfileImage}>
          <div style={{ boxShadow: "10px 5px 5px red" }}>
            <Image
              src={profilePic}
              alt="Angie Rodriguez profile pic"
              width="500vw"
              height="500vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
