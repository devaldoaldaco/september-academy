const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
const backdrop = document.querySelector('.backdrop');

function closeMenu(){
  nav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded','false');
  backdrop.classList.remove('show');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  backdrop.classList.toggle('show', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

backdrop.addEventListener('click', closeMenu);
window.addEventListener('resize', () => {
  // Si pasamos a desktop, cierra menú
  if (window.innerWidth > 768) closeMenu();
});

// newsletter (validación mínima)
const form = document.querySelector('.newsletter');
if (form){
  const input = form.querySelector('input');
  const error = form.querySelector('.error-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    const ok = /^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email);
    if(!ok){
      error.textContent = 'Please insert a valid email';
      input.style.outline = '2px solid #ff6b6b';
      input.focus();
      return;
    }
    error.textContent = '';
    input.style.outline = 'none';
    form.reset();
    alert('Subscribed!');
  });
}