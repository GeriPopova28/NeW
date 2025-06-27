import styles from '../styles/machines.module.css'; // Уверете се, че импортирате стиловете

export default function Machines() {
  return (
    <section id="machines" className={styles.machinesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Machines</h2>
        <p className={styles.subheading}>
          Explore the types of furniture-making machines we help you acquire.
        </p>

        {}
        <div className={styles.gridContainer}> {}
          <div className={styles.grid}>
            {}
            <div className={styles.card}>
              <h3>Edge Banding Machine</h3>
              <p>Efficient for sealing edges of panels with durable finishes.</p>
            </div>
            <div className={styles.card}>
              <h3>CNC Router</h3>
              <p>Precision tool for cutting and carving wood, plastic, and more.</p>
            </div>
            <div className={styles.card}>
              <h3>Panel Saw</h3>
              <p>Industrial saw for cutting large wood sheets with accuracy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}