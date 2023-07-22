import Button from "../components/Button";
import styles from "../styles/Home.module.scss";
export default function About({ styles }) {
  return (
    <div className={styles} id="about">
      <div>
        <picture></picture>
      </div>
      <div>
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
        <button>Read more about my journey</button>
      </div>
    </div>
  );
}
