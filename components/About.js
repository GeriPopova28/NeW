import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>What We Do</h2>
      <p className={styles.description}>
        We specialize in connecting buyers with top-notch furniture-making machinery
        and the software that drives them. Our goal is to simplify sourcing and ensure
        trustworthy deals.
      </p>
    </section>
  );
}