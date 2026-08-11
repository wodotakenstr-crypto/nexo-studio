const testBuyButton = document.querySelector('.test-buy');
const purchaseNote = document.querySelector('.purchase-note');

testBuyButton?.addEventListener('click', () => {
  purchaseNote.textContent = 'Modo prueba: el enlace de pago de PayPal se conectara aqui cuando el producto este listo.';
});
