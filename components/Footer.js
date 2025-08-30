import Link from 'next/link';
import styles from '../styles/footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faTiktok,
  faFacebookF,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentTop}>
        <div className={styles.footerContainer}>
          <div className={styles.columnSocials}>
            <h4 className={styles.socialsHeading}>Socials</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/company/ВАШЕТО_ИМЕ_НА_КОМПАНИЯТА_В_LINKEDIN" target="_blank" rel="noopener noreferrer" aria-label="CBES LTD on LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
              </a>
              <a href="https://www.tiktok.com/@ВАШЕТО_ПОТРЕБИТЕЛСКО_ИМЕ_В_TIKTOK" target="_blank" rel="noopener noreferrer" aria-label="CBES LTD on TikTok">
                <FontAwesomeIcon icon={faTiktok} className={styles.socialIcon} />
              </a>
              <a href="https://www.facebook.com/ВАШАТА_FACEBOOK_СТРАНИЦА" target="_blank" rel="noopener noreferrer" aria-label="CBES LTD on Facebook">
                <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
              </a>
              <a href="https://www.instagram.com/ВАШЕТО_ПОТРЕБИТЕЛСКО_ИМЕ_В_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="CBES LTD on Instagram">
                <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
              </a>
              <a href="https://www.youtube.com/ВАШЕТО_YOUTUBE_КАНАЛ_ID_ИЛИ_ИМЕ" target="_blank" rel="noopener noreferrer" aria-label="CBES LTD on YouTube">
                <FontAwesomeIcon icon={faYoutube} className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={styles.columnLinks}>
            <h4 className={styles.columnTitle}>Fast connections</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about" legacyBehavior><a>About</a></Link></li>
              <li><Link href="#machines" legacyBehavior><a>Machines</a></Link></li>
              <li><Link href="#software" legacyBehavior><a>Software</a></Link></li>
              <li><Link href="#team" legacyBehavior><a>Team</a></Link></li>
              <li><Link href="#contact" legacyBehavior><a>Contact</a></Link></li>
              </ul>
          </div>
          <div className={styles.columnContact}>
            <h4 className={styles.columnTitle}>Contacts</h4>
            <ul className={styles.contactList}>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                <span>123 Industrial Road, Suite 45 City, Country</span>
                </li>
                    <li>
                        </li>
                        <li>
                          
                            </li>
                            <li>
                              
                                </li>
                                </ul>
                                </div>
          <div className={styles.columnNewsletter}>
            <h4 className={styles.columnTitle}>Subscribe</h4>
            <p className={styles.newsletterText}>Receive our latest news and promotions.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="your email" className={styles.newsletterInput} />
              <button type="submit" className={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>

        </div>
      </div> 

      <div className={styles.footerBottomBar}>
        <div className={styles.footerContainer}> 
          <p className={styles.copyright}>© {currentYear} CBES LTD. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" legacyBehavior><a>Privacy Policy</a></Link>
            <Link href="/terms-of-service" legacyBehavior><a>Terms of use</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}