import { useEffect } from 'react';

const replacements = [
  ['Ver programas', 'Ver Programas'],
  ['Cotizar mi proyecto', 'Cotizar Mi Proyecto'],
  ['Que hace?', '¿Qué hace?'],
  ['Que quieres crear?', '¿Qué quieres crear?'],
  ['Como podemos ayudarte?', '¿Cómo podemos ayudarte?'],
  ['Como trabajamos', 'Cómo trabajamos'],
  ['Despues', 'Después'],
  ['suscripcion', 'suscripción'],
  ['cotizacion', 'cotización'],
  ['operacion', 'operación'],
  ['produccion', 'producción'],
  ['diseno', 'diseño'],
  ['solucion', 'solución'],
  ['gestion', 'gestión'],
  ['aplicacion', 'aplicación'],
  ['automatizacion', 'automatización'],
  ['configuracion', 'configuración'],
  ['instalacion', 'instalación'],
  ['capacitacion', 'capacitación'],
  ['actualizacion', 'actualización'],
  ['renovacion', 'renovación'],
  ['pagina', 'página'],
  ['pais', 'país'],
  ['tambien', 'también'],
  ['rapida', 'rápida'],
  ['rapido', 'rápido'],
  ['tecnicos', 'técnicos'],
  ['tecnologia', 'tecnología'],
  ['desafio', 'desafío'],
  ['diagnostico', 'diagnóstico'],
  ['parametros', 'parámetros'],
  ['credito', 'crédito'],
  ['desarrollamos', 'desarrollamos'],
  ['Cuentanos', 'Cuéntanos'],
  ['Manten', 'Mantén'],
  ['Mas ', 'Más '],
];

export default function TextCorrections() {
  useEffect(() => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!node.nodeValue.trim()) return;
      replacements.forEach(([from, to]) => { node.nodeValue = node.nodeValue.split(from).join(to); });
    });
  });
  return null;
}
