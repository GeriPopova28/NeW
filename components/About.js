import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.heading}>What We Do</h2>
      <p>We were founded in October 2024, combining the ideas, 
        technical skills and know-how of its owners. The company benefits from 20 years of experience in the woodworking 
        technologies sector in the Italian market.We represent some of the best Italian companies, global leaders in the woodworking sector.</p>
    </section>
  );
}