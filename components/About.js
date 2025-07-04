import styles from "../styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}> 
        <h2 className={styles.heading}>What We Do</h2>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>
              We were founded in October 2024, born from the shared vision, technical expertise, and entrepreneurial spirit of our 
              founders. Our company draws on over 20 years of in-depth experience in the Italian woodworking technologies market, 
              ensuring a solid foundation of industry knowledge and trusted relationships. We proudly represent some of the most 
              prestigious Italian brands—global leaders renowned for their innovation, precision, and excellence in the woodworking 
              sector. Our mission is to bring cutting-edge Italian craftsmanship and technology to new markets, offering reliable 
              solutions tailored to the needs of modern manufacturers.
            </p>
          </div>

          <div className={styles.rightColumn}>
            <h3 className={styles.partnersHeading}>Our Partners</h3> 
            <ul className={styles.partnersList}> 
              <li>BIESSE S.p.A. for Malta</li>
              <li>BACCI GROUP & BACCI AUTOMATION for Malta, Greece and Cyprus</li>
              <li>COSMEC S.r.L</li>
              <li>CASADEI INDUSTRIE S.r.L</li>
              <li>SAOMAD 2 S.r.L</li>
              <li>COMEC GROUP</li>
              <li>PADE S.r.L</li>
              <li>KOSMOSOFT ENGINEERING S.r.L</li>
              <li>ALPHACAM</li>
              <li>FANTACCI INDUSTRIE S.r.L & CUSPIS</li>
              <li>FINITURE S.r.L</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}