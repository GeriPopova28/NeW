import styles from '../styles/software.module.css'; 

export default function Software() {
  return (
    <section id="software" className={styles.softwareSection}> {}
      <div className={styles.container}> {}
        <h2 className={styles.heading}>Compatible Software</h2> {}
        <p className={styles.description}>Discover the specialized software tools designed to work with our machinery.</p> {}
        
        <div className={styles.grid}> {}
          <div className={styles.card}> {}
          {}
          {}
            <h3>CAD/CAM Integration</h3>
            <p>Seamlessly transition from design to production with optimized cutting and shaping paths.</p>
          </div>
          <div className={styles.card}>
          {}
            <h3>Production Control Suite</h3>
            <p>Manage workflow, schedule production, and monitor output from a single dashboard.</p>
          </div>
          <div className={styles.card}>
          {}
            <h3>Nesting Software</h3>
            <p>Optimize material usage by calculating the best fit layout for cutting operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}