import styles from "../styles/Home.module.scss";

export default function Github() {
  return (
    <div className={`${styles.sectionFlex} ${styles.github} ${styles.pageMargin}`} id="github">
      <div>
        <picture></picture>
      </div>
      <div>
        <h2 className={styles.headingOne}>
          Check out my latest Github Works
        </h2>
        <ul>
          <li>2021 - 2023: Aisle Rocket</li>
          <li>2020 - 2021: Gold Leaf Settlement Solutions (Contract)</li>
          <li>2020 - 2021: WORKPLACE21 (Contract)</li>
          <li>2020 - 2021: Code for PDX</li>
        </ul>
      </div>
    </div>
  );
}
