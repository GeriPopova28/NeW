import styles from '../styles/contact.module.css'; 
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, message } = formData;
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }
  alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
  setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
};


  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Industrial Road, Suite 45<br />City, Country</p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@cbesltd.com">info@cbesltd.com</a></p>
          <p><strong>Working Hours:</strong><br />Mon – Fri, 9:00 – 17:00</p>
          <div className={styles.MapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.123456789!2d23.321!3d42.697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVitosha+Blvd+10%2C+1000+Sofia%2C+Bulgaria!5e0!3m2!1sen!2sbg!4v1678901234567!5m2!1sen!2sbg"
              width="570"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="surname" placeholder="Your Surname" value={formData.surname} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}