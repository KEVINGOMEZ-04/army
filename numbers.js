/**
 * numbers.js
 * ==========
 * Contiene el listado de números para la rifa (001 al 999).
 * Cada número es un objeto: { numero: "001", vendido: false }
 * 
 * La lista de vendidos es fácilmente editable: modificar el array 'vendidos'.
 * Los números dentro de 'vendidos' se escriben sin ceros (ej: 1, 25, 300).
 * El sistema los convierte automáticamente al formato de tres dígitos.
 */

// ----- LISTA EDITABLE DE NÚMEROS VENDIDOS (sin ceros a la izquierda) -----
const vendidos = [1, 5, 10];   // <-- CAMBIA ESTOS NÚMEROS SEGÚN SE VENDAN

// ----- GENERACIÓN AUTOMÁTICA DE LOS 999 NÚMEROS -----
const numbers = [];   // Este array se exportará al objeto window

// Recorremos del 1 al 999
for (let i = 1; i <= 999; i++) {
  // Formatear a 3 dígitos (001, 002, ..., 099, 100, ... 999)
  const numeroFormateado = i.toString().padStart(3, '0');
  
  // Verificar si este número está en la lista de vendidos
  const estaVendido = vendidos.includes(i);   // i es número sin ceros
  
  // Agregar el objeto al array
  numbers.push({
    numero: numeroFormateado,
    vendido: estaVendido
  });
}

// ----- EXPORTAR EL ARRAY PARA QUE LO USE LA PÁGINA PRINCIPAL -----
window.numbers = numbers;

console.log(`✅ numbers.js cargado: ${numbers.filter(n => n.vendido).length} números vendidos.`);
