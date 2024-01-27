import heroStyles from "./styles.module.scss"
import Image from "next/image";
import profilePic from "../../public/images/AngieR_profile_min_2.png";

export default function Hero() {
  return (
    <div className={ `sectionFlex sectionHeight sectionMargin` } id="hero">
      <div className={ `${heroStyles.heroFlexContainer}` }>
        <div className={ `${heroStyles.heroCopy}` }>
          <p>Welcome!</p>
          <h1 className={ `headingOne` }>
            <span>My name is</span> Angie Rodriguez
          </h1>
          <p className={ `heroParagraph` }>
            I&apos;m a software engineer based in the PNW. I love working in
            React.js, TypeScript and more.
          </p>
        </div>
        <div className={ `${heroStyles.heroProfileImage}` }>
          <Image
            src={ profilePic }
            alt="Angie Rodriguez profile pic"
            width={ 300 }
            height={ 300 }
            style={ { boxShadow: '10px 10px 10px gray' } }
          />
        </div>
      </div>
    </div>
  )
}