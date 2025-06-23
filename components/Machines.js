import { useEffect, useState } from 'react';
import styles from '../styles/machines.module.css';

export default function Machines() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section id="machines" className={styles.machinesSection}>
      <div className="container">
        <h2 className={styles.heading}>Our Machines</h2>
        <p className={styles.description}>
          Explore the types of furniture-making machines we help you acquire.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            {/* <Image src="/assets/images/machine1.jpg" alt="..." /> */}
            <h3>Edge Banding Machine</h3>
            <p>Efficient for sealing edges of panels with durable finishes.</p>
          </div>
          <div className={styles.card}>
            {/* <Image src="/assets/images/machine2.jpg" alt="..." /> */}
            <h3>CNC Router</h3>
            <p>Precision tool for cutting and carving wood, plastic, and more.</p>
          </div>
          <div className={styles.card}>
            {/* <Image src="/assets/images/machine3.jpg" alt="..." /> */}
            <h3>Panel Saw</h3>
            <p>Industrial saw for cutting large wood sheets with accuracy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
