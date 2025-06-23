document.addEventListener('DOMContentLoaded', function () {
  // ===== Contact Form Submission =====
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const surname = form.surname.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
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
    Object.assign(lightbox.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10000',
      cursor: 'zoom-out',
    });

    const img = document.createElement('img');
    Object.assign(img.style, {
      maxWidth: '90%',
      maxHeight: '80%',
      borderRadius: '8px',
    });

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

  // ===== Leaflet Map Initialization =====
  const mapElement = document.getElementById('map');
  if (mapElement) {
    var map = L.map('map').setView([42.6977, 23.3219], 13); // София

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([42.6977, 23.3219]).addTo(map)
      .bindPopup('Нашият офис')
      .openPopup();
  }
});

 function openModal(name) {
    document.getElementById('modal-' + name).style.display = 'block';
  }

  function closeModal(name) {
    document.getElementById('modal-' + name).style.display = 'none';
  }
  window.onclick = function(event) {
    document.querySelectorAll(".modal").forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }