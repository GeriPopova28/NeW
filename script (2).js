// script.js

document.addEventListener('DOMContentLoaded', function () {
    // ===== Contact Form Submission =====
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
  
        if (!name || !email || !message) {
          alert('Please fill in all fields.');
          return;
        }
  
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        form.reset();
      });
    }

    
  
    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // ===== Lightbox for Gallery Images =====
    const lightboxImages = document.querySelectorAll('.lightbox-image');
    if (lightboxImages.length > 0) {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.style.position = 'fixed';
      lightbox.style.top = '0';
      lightbox.style.left = '0';
      lightbox.style.width = '100%';
      lightbox.style.height = '100%';
      lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
      lightbox.style.display = 'flex';
      lightbox.style.justifyContent = 'center';
      lightbox.style.alignItems = 'center';
      lightbox.style.zIndex = '10000';
      lightbox.style.cursor = 'zoom-out';
      lightbox.style.display = 'none';
  
      const img = document.createElement('img');
      img.style.maxWidth = '90%';
      img.style.maxHeight = '80%';
      img.style.borderRadius = '8px';
      lightbox.appendChild(img);
      document.body.appendChild(lightbox);
  
      lightboxImages.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', () => {
          img.src = image.src;
          lightbox.style.display = 'flex';
        });
      });
  
      lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }
  });

  <script src="scripts/map.js"></script>

  document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([42.6977, 23.3219], 13); // София за пример

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([42.6977, 23.3219]).addTo(map)
    .bindPopup('Нашият офис')
    .openPopup();
});

  