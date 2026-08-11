document.querySelectorAll('.product-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.parentElement.nextElementSibling;
    const open = details.hidden;
    details.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    button.innerHTML = open ? 'Ocultar detalle <span>↑</span>' : 'Que hace? <span>↓</span>';
  });
});
