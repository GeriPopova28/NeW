import { useState } from 'react';
import styles from '../styles/team.module.css';

export default function Team() {
  const [activeModal, setActiveModal] = useState(null);

  const teamMembers = [
    {
      id: 'john',
      name: 'John Doe',
      role: 'Founder & Deal Strategist',
      phone: '+1234567890',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      bio: 'John has over 15 years of experience in the furniture machinery brokerage industry.'
    },
    {
      id: 'jane',
      name: 'Jane Smith',
      role: 'Operations Manager',
      phone: '+1234567891',
      linkedin: 'https://linkedin.com/in/janesmith',
      github: 'https://github.com/janesmith',
      bio: 'Jane ensures smooth operations and coordinates logistics with both clients and suppliers.'
    }
  ];

  return (
    <section id="team" className={`${styles.teamSection}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Meet the Team</h2>
        <p className={styles.subheading}> The entire CBES LTD team thanks its customers for the respect and the trust shown! 
          For us, there is no greater profit than this! Nor a greater passion than that of reaching professional heights together!
</p>
        <div className={styles.grid}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.card}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <button
                className={styles.moreBtn}
                onClick={() => setActiveModal(member.id)}
                aria-haspopup="dialog"
                aria-expanded={activeModal === member.id}
                aria-controls={`${member.id}-modal`}
              >
                Read more
              </button>
              <div>
                <a href={`tel:${member.phone}`}>Contact</a>
              </div>
              <div className={styles.socials}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} LinkedIn`}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} GitHub`}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {teamMembers.map(member => (
        activeModal === member.id && (
          <div
            key={member.id}
            id={`${member.id}-modal`}
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${member.id}-modal-title`}
            onClick={() => setActiveModal(null)}
          >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 id={`${member.id}-modal-title`}>More About {member.name}</h3>
              <p>{member.bio}</p>
            </div>
          </div>
        )
      ))}
    </section>
  );
}