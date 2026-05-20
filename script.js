// Cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%, -50%) scale(0.7)');
  document.addEventListener('mouseup', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');

  // Floating paws
  const pawEmojis = ['🐾','🐶','🐱','🐰','🐹','🦜','🐠','🐈','🦮'];
  const bg = document.getElementById('floatingBg');
  for (let i = 0; i < 15; i++) {
    const paw = document.createElement('div');
    paw.className = 'paw';
    paw.textContent = pawEmojis[Math.floor(Math.random() * pawEmojis.length)];
    paw.style.left = Math.random() * 100 + 'vw';
    paw.style.fontSize = (1 + Math.random() * 2) + 'rem';
    paw.style.animationDuration = (8 + Math.random() * 12) + 's';
    paw.style.animationDelay = -(Math.random() * 15) + 's';
    bg.appendChild(paw);
  }

  // Notifications
  function showNotification(msg) {
    const n = document.getElementById('notification');
    n.textContent = msg;
    n.classList.add('show');
    setTimeout(() => n.classList.remove('show'), 3000);
  }

  function addCart() {
    showNotification('🛒 Produto adicionado ao carrinho!');
  }

  function addFav(btn) {
    btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
    if (btn.textContent === '❤️') showNotification('❤️ Adicionado aos favoritos!');
  }

  // Intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .product-card, .testimonial-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.3s, box-shadow 0.3s`;
    observer.observe(el);
  });
