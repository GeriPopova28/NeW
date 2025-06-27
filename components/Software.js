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
          Discover the specialized software tools designed to work with our machinery.
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