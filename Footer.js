// components/Footer.js
import React from 'react';
import styles from '../styles/footer.module.css';

// Импортираме Font Awesome компонента и нужните икони
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {}
          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Address: 123 Machinery St, Industrial City, World</p>
          </div>

          {}
          <div className={styles.footerColumn}>
            <h4>Fast Connections</h4>
            <ul className={styles.navLinks}> {}
              <li><a href="/about">About Us</a></li> {}
              <li><a href="/machines">Our Machines</a></li>
              <li><a href="/software">Compatible Software</a></li>
              <li><a href="/team">Meet the Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {}
          <div className={styles.footerColumn}>
            <h4>Social Media</h4>
            <ul className={styles.socialLinks}> {}
              <li>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>

          {}
          <div className={styles.footerColumn}>
            <h4>Information</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}