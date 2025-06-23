import styles from '../styles/team.module.css';

export default function Team() {
  return (
    <section id="team" className="section light">
      <div className="container">
        <h2>Meet the Team</h2>
        <div className="grid">
          <div className="card">
            {/* <img src="/assets/images/member1.jpg" alt="John Doe" /> */}
            <h3>John Doe</h3>
            <p>Founder & Deal Strategist</p>
            <button className="more-btn" onClick={() => openModal('john')}>Read more</button>
            <div>
              <a href="tel:+1234567890">Contact</a>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.github.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="card">
            {/* <img src="/assets/images/member2.jpg" alt="Jane Smith" /> */}
            <h3>Jane Smith</h3>
            <p>Operations Manager</p>
            <button className="more-btn" onClick={() => openModal('jane')}>Read more</button>
            <div>
              <a href="tel:+1234567891">Contact</a>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <div id="modal-john" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal('john')}>&times;</span>
          <h3>More About John</h3>
          <p>John has over 15 years of experience in the furniture machinery brokerage industry.</p>
        </div>
      </div>
      <div id="modal-jane" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal('jane')}>&times;</span>
          <h3>More About Jane</h3>
          <p>Jane ensures smooth operations and coordinates logistics with both clients and suppliers.</p>
        </div>
      </div>
    </section>
  );
}

function openModal(name) {
  const modal = document.getElementById('modal-' + name);
  if (modal) modal.style.display = 'block';
}

function closeModal(name) {
  const modal = document.getElementById('modal-' + name);
  if (modal) modal.style.display = 'none';
}

if (typeof window !== 'undefined') {
  window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  };
}