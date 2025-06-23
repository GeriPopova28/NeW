import styles from '../styles/software.module.css';
export default function Software() {
  return (
    <section id="software" className="section">
      <div className="container">
        <h2>Compatible Software</h2>
        <p>Discover the specialized software tools designed to work with our machinery.</p>
        <div className="grid">
          <div className="card">
          {/*  <Image src="/assets/images/software1.jpg" alt="CAD/CAM Integration" width={300} height={200} /> */}
            <h3>CAD/CAM Integration</h3>
            <p>Seamlessly transition from design to production with optimized cutting and shaping paths.</p>
          </div>
          <div className="card">
          {/*  <Image src="/assets/images/software2.jpg" alt="Production Control Suite" width={300} height={200} /> */}
            <h3>Production Control Suite</h3>
            <p>Manage workflow, schedule production, and monitor output from a single dashboard.</p>
          </div>
          <div className="card">
         {/*   <Image src="/assets/images/software3.jpg" alt="Nesting Software" width={300} height={200} /> */}
            <h3>Nesting Software</h3>
            <p>Optimize material usage by calculating the best fit layout for cutting operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
