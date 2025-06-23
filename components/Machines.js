export default function Machines() {
  return (
    <section id="machines" className="section light">
      <div className="container">
        <h2>Our Machines</h2>
        <p>Explore the types of furniture-making machines we help you acquire.</p>
        <div className="grid">
          <div className="card">
           {/* <Image src="/assets/images/machine1.jpg" alt="Edge Banding Machine" width={300} height={200} /> */}
            <h3>Edge Banding Machine</h3>
            <p>Efficient for sealing edges of panels. Provides smooth, durable finishes for furniture production.</p>
          </div>
          <div className="card">
          {/*  <Image src="/assets/images/machine2.jpg" alt="CNC Router" width={300} height={200} /> */}
            <h3>CNC Router</h3>
            <p>Precision cutting and carving tool for intricate wood, plastic, and composite designs.</p>
          </div>
          <div className="card">
          {/*  <Image src="/assets/images/machine3.jpg" alt="Panel Saw" width={300} height={200} /> */}
            <h3>Panel Saw</h3>
            <p>Industrial-grade saw ideal for cutting large sheets of wood, MDF, and particle board with accuracy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}