import styles from "../../styles/Home.module.scss";
// import Link from "next/link";
import Image from "next/image";
// import backgroundPic from "../public/images/background.jpg";
import profilePic from "../../public/images/AngieR_profile_min_2.png";

export default function Hero() {
  return (
    <div className={ `${styles.sectionFlex} ${styles.hero} ${styles.pageMargin}` } id="hero">
      <div className={ styles.aboutFlexContainer }>
        <div className={ styles.heroCopy }>
          <p>Welcome!</p>
          <h1 className={ styles.headingOne }>
            <span>My name is</span> Angie Rodriguez
          </h1>
          <p className={ styles.heroParagraph }>
            I&apos;m a software engineer based in the PNW. I love working in
            React.js, TypeScript and more.
          </p>
        </div>
        <div className={ styles.heroProfileImage }>
          <Image
            src={ profilePic }
            alt="Angie Rodriguez profile pic"
            width={ 500 }
            height={ 500 }
            style={ { boxShadow: '10px 10px 10px gray' } }
          />
        </div>
      </div>
    </div>
  )
}