import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}> 
        <h2 className={styles.heading}>What We Do</h2>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>
            </p>
          </div>

          <div className={styles.rightColumn}>
          </div>
        </div>
      </div>
    </section>
  );
}