import { useEffect, useState } from 'react';
import styles from '../styles/machines.module.css';

export default function Machines() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section id="machines" className={styles.machinesSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Machines</h2>
        <p className={styles.subheading}> 
          We are able to satisfy all your needs in terms of various and
          modern technological solutions for the woodworking of furniture, 
          doors and windows, ensuring exceptional quality and efficiency.
          Our equipment and systems are designed to improve production efficiency,
          ensure consistent quality, and meet the specific needs of each client. 
        </p>
        <div className={styles.grid}>
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
    </section>
  );
}