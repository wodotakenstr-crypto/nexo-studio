const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.site-header');
const mobileLinks = document.querySelectorAll('.mobile-nav a');
const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

menuButton?.addEventListener('click', () => {
  const open = menuButton.classList.toggle('is-open');
  header?.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});

mobileLinks.forEach((link) => link.addEventListener('click', () => {
  menuButton?.classList.remove('is-open');
  header?.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Gracias. Recibimos tu consulta y pronto estaremos en contacto.';
  form.reset();
});
