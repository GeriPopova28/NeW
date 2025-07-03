import styles from "../styles/software.module.css";

const cards = [
  {
    title: "CAD/CAM Integration",
    description:
      "Seamlessly transition from design to production with optimized cutting and shaping paths.",
  },
  {
    title: "Production Control Suite",
    description:
      "Manage workflow, schedule production, and monitor output from a single dashboard.",
  },
  {
    title: "Nesting Software",
    description:
      "Optimize material usage by calculating the best fit layout for cutting operations.",
  },
];

export default function Software() {
  return (
    <section id="software" className={styles.softwareSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Compatible Software</h2>
        <p className={styles.subheading}>
          Our mission is not only to offer access to the best 
          Italian woodworking technologies but also to provide professional and transparent service that builds mutual trust
           and respect.
          It is a great honor when our customer becomes not only a partner but also a dear friend. Our entire team thanks customers for their
     respect and trust!
        </p>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}