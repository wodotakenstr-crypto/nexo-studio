const downloadModal = document.querySelector('#download-modal');
const downloadTitle = document.querySelector('#download-title');
const summaryProduct = document.querySelector('#summary-product');
const summaryPrice = document.querySelector('#summary-price');
const payDemo = document.querySelector('#pay-demo');
const fileDemo = document.querySelector('#file-demo');
const downloadStatus = document.querySelector('#download-status');

document.querySelectorAll('.download-demo').forEach((button) => button.addEventListener('click', () => {
  downloadModal.hidden = false;
  downloadTitle.textContent = `Comprar ${button.dataset.product}`;
  summaryProduct.textContent = button.dataset.product;
  summaryPrice.textContent = `USD ${button.dataset.price}`;
  payDemo.hidden = false;
  fileDemo.hidden = true;
  downloadStatus.textContent = '';
}));

document.querySelector('.download-close')?.addEventListener('click', () => { downloadModal.hidden = true; });
downloadModal?.addEventListener('click', (event) => { if (event.target === downloadModal) downloadModal.hidden = true; });
payDemo?.addEventListener('click', () => { payDemo.hidden = true; fileDemo.hidden = false; downloadStatus.textContent = 'Pago de prueba aprobado. Tu licencia perpetua esta activa.'; });
fileDemo?.addEventListener('click', () => { downloadStatus.textContent = 'Descarga simulada completada. En la version final aqui se entregara el archivo real.'; });
