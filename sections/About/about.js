import aboutStyles from "./styles.module.scss"
import Link from "next/link";
import Image from "next/image";
import Timeline from "../../components/Timeline"
import profilePic from "../../public/images/AngieR_profile_min_2.png";

export default function About() {
  return (
    <div className={`sectionFlex sectionHeight sectionMargin`} id="about">
      <div className={aboutStyles.aboutFlexContainer}>
        <div className={aboutStyles.aboutCopy}>
          <h2 className={`headingOne`}>
            <span>About Me</span>
          </h2>
          <p>I&apos;m a former liberal arts major who discovered web design around 2016. Since then I&apos;m embarked on a lengthy journey to change careers and discover more of myself along the way.</p><br />
          <p>When I&apos;m not learning software engineering I love reading novels, playing with my cats Maggie and Thunder and jamming to video game music.</p>
          <div className={aboutStyles.aboutProfileImage}>
            <div>
              <Image
                src={profilePic}
                alt="Angie Rodriguez profile pic"
                width={300}
                height={300}
                style={{ boxShadow: '10px 10px 10px gray' }}
              />
            </div>
          </div>
          {/* <button>
            <Link href="/about">Read more about my journey</Link>
          </button> */}
        </div>
        <div className={aboutStyles.aboutCopy}>
          <p>Personal Timeline:</p>
          <Timeline />
          {/* <button>
            <Link href="/about">Read more about my journey</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}
