import styles from "../styles/Home.module.scss";

export default function Timeline({ events }) {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2016</span> Became
            interested in web design as a career while interning in Spain
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2016</span> Became
            interested in web design as a career while interning in Spain
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2018</span> Moved to the
            Pacific Northwest
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2018</span> Started my
            coding bootcamp
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2019</span> Graduated from
            bootcamp
          </p>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <div>
          <p>
            <span>2021</span> Secured first full-time developer role
          </p>
        </div>
      </div>
    </div>
  );
}
