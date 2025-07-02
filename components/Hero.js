import styles from '../styles/hero.module.css'; 
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1><i>CBES LTD- Cosmopolitan Business Engineering & Service</i></h1>
        <p>Your Partner for Modern Italian Woodworking Solutions — Machines, Software, and Service</p>
      </div>
    </section>
  );
}