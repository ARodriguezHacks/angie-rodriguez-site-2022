import styles from "../../styles/Home.module.scss";

export default function LinkedIn() {
  return (
    <div className={`sectionFlex sectionHeight sectionMargin`} id="linkedin">
      <div>
        <h2 className={`headingOne`}>My Latest LinkedIn Posts</h2>
        <div className={`${styles.sectionFlex} ${styles.githubFlexContainer}`}>
        </div>
      </div>
    </div>
  );
}
