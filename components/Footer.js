export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section nav-links">
          <h4>Fast connections</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#machines">Machines</a></li>
            <li><a href="#software">Software</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="social-links">
          <a href="tel:+359888123456"><i className="fas fa-phone"></i></a>
          <a href="mailto:info@cbes.com" target="_blank"><i className="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.tiktok.com/in/your-profile" target="_blank"><i className="fab fa-tiktok"></i></a>
          <a href="https://www.facebook.com/your-page" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/your-profile" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/your-channel" target="_blank"><i className="fab fa-youtube"></i></a>
        </div>

        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>

        <p>&copy; 2025 CBES LTD. All rights reserved.</p>
      </div>
    </footer>
  );
}