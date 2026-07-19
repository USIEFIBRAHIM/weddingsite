(() => {
  const intro = document.getElementById('intro');
  const seal = document.getElementById('seal');
  const invitation = document.getElementById('invitation');
  const musicToggle = document.getElementById('musicToggle');
  const music = document.getElementById('music');
  const sealImage = document.getElementById('sealImage');
  let opened = false;

  // صورة الختم مقصوصة مسبقاً بخلفية شفافة حقيقية (بدون أبيض على الإطلاق)،
  // فلا حاجة لأي معالجة وقت التشغيل؛ فقط نظهرها بتأثير خفيف بعد تحميلها.
  if (sealImage) {
    const revealSeal = () => document.body.classList.add('seal-ready');
    if (sealImage.complete && sealImage.naturalWidth) revealSeal();
    else {
      sealImage.addEventListener('load', revealSeal, { once: true });
      sealImage.addEventListener('error', revealSeal, { once: true });
    }
  }

  function openInvitation() {
    if (opened) return;
    opened = true;
    // يبدأ الصوت داخل ضغطة المستخدم نفسها، لتفادي حظر المتصفح للتشغيل التلقائي.
    if (music) music.play().catch(() => {});
    intro.classList.add('opening');
    window.setTimeout(() => {
      intro.style.display = 'none';
      invitation.classList.add('show');
      invitation.setAttribute('aria-hidden', 'false');
      musicToggle.classList.add('visible');
    }, 2700);
  }
  seal.addEventListener('click', openInvitation);
  seal.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvitation(); } });

  const weddingDate = new Date('2026-08-20T20:00:00+03:00').getTime();
  const ids = ['days','hours','minutes','seconds'];
  const updateCountdown = () => {
    let remaining = Math.max(0, weddingDate - Date.now());
    const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
    ids.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, '0'));
  };
  updateCountdown(); setInterval(updateCountdown, 1000);

  musicToggle.addEventListener('click', () => {
    if (!music) { alert('أضف ملف music.mp3 داخل assets/audio لتفعيل الموسيقى.'); return; }
    if (music.paused) { music.play(); musicToggle.textContent = '♫'; } else { music.pause(); musicToggle.textContent = '◼'; }
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = lightbox.querySelector('img');
  document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;
    lightboxImage.src = img.src; lightboxImage.alt = img.alt; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false');
  }));
  lightbox.addEventListener('click', e => { if (e.target === lightbox || e.target.tagName === 'BUTTON') { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); } });
})();
