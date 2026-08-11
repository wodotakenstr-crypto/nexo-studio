const chatPanel = document.querySelector('#chat-panel');
const chatToggle = document.querySelector('#chat-toggle');
const chatClose = document.querySelector('.chat-close');
const chatForm = document.querySelector('#chat-form');
const chatMessages = document.querySelector('#chat-messages');
const chatOptions = document.querySelectorAll('.chat-options button');
const chatWhatsApp = document.querySelector('#chat-whatsapp');

function addMessage(text, role) {
  const message = document.createElement('div');
  message.className = `chat-message ${role}`;
  message.textContent = text;
  chatMessages.append(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function replyTo(text) {
  const question = text.toLowerCase();
  if (question.includes('proyecto') || question.includes('venta')) return 'Tenemos Zize Convert y Ciber Control, ademas de soluciones a medida. Puedes ver los detalles en la seccion Proyectos.';
  if (question.includes('licencia') || question.includes('descarga')) return 'Cada proyecto incluye licencia perpetua, descarga digital y soporte. Puedes revisar los detalles antes de comprar.';
  if (question.includes('soporte')) return 'Cada licencia incluye soporte inicial. El alcance y tiempo exacto aparecen en la ficha del proyecto antes de comprar.';
  if (question.includes('zize') || question.includes('talla') || question.includes('estampado')) return 'Zize Convert adapta tallas y medidas de modelos para preparar uniformes y estampados antes de imprimirlos.';
  if (question.includes('ciber')) return 'Ciber Control centraliza equipos, actividades y el estado de tu operacion en un solo panel.';
  if (question.includes('precio') || question.includes('pago') || question.includes('paypal')) return 'Los precios aparecen en cada proyecto. El pago con PayPal se habilitara en cuanto terminemos la prueba del catalogo.';
  if (question.includes('web') || question.includes('app') || question.includes('medida')) return 'Podemos crear paginas web, aplicaciones, sistemas de gestion, automatizaciones y mucho mas. Usa el formulario para contarnos lo que necesitas.';
  return 'Gracias por tu consulta. Para una recomendacion exacta, cuentanos que problema quieres resolver y te orientaremos.';
}

function sendChatMessage(text) {
  const value = text.trim();
  if (!value) return;
  addMessage(value, 'user');
  chatWhatsApp.href = `https://wa.me/5804125585388?text=${encodeURIComponent(`Hola Nexo, necesito informacion sobre: ${value}`)}`;
  window.setTimeout(() => addMessage(replyTo(value), 'bot'), 350);
}

function setChatOpen(open) {
  chatPanel.hidden = !open;
  chatToggle.setAttribute('aria-expanded', String(open));
}

chatToggle?.addEventListener('click', () => setChatOpen(chatPanel.hidden));
chatClose?.addEventListener('click', () => setChatOpen(false));
chatForm?.addEventListener('submit', (event) => { event.preventDefault(); sendChatMessage(chatForm.elements.message.value); chatForm.reset(); });
chatOptions.forEach((option) => option.addEventListener('click', () => sendChatMessage(option.dataset.question || '')));
