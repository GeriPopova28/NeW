import { useState, useEffect } from 'react'; // Все още ги импортираме, но няма да ги използваме след малко
import styles from '../styles/team.module.css';

// Import Font Awesome components and icons (оставяме ги за LinkedIn/GitHub)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Team() {
  // Премахваме useState и useEffect, свързани с модалите, тъй като няма да се използват
  // const [activeModal, setActiveModal] = useState(null);
  // const openModal = (name) => { setActiveModal(name); };
  // const closeModal = () => { setActiveModal(null); };
  // useEffect(() => { /* ... логика за клик извън модала ... */ }, [activeModal, closeModal]);

  return (
    <section id="team" className={`${styles.section} ${styles.light}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Meet the Team</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>John Doe</h3>
            <p>Founder & Deal Strategist</p>
            <div>
              <a href="tel:+1234567890">Contact</a>
            </div>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          <div className={styles.card}>
            {/* <Image src="/assets/images/member2.jpg" alt="Jane Smith" width={200} height={200} className={styles.memberImage} /> */}
            <h3>Jane Smith</h3>
            <p>Operations Manager</p>
            {/* Премахваме бутона "Read more" */}
            {/* <button className={styles.moreBtn} onClick={() => openModal('jane')}>Read more</button> */}
            <div>
              <a href="tel:+1234567891">Contact</a>
            </div>
            <div className={styles.socials}>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}