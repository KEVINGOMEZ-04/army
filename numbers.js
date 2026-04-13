const vendidos = [1, 5, 10]; // Edita aquí los números vendidos (sin ceros)

const numbers = [];
for (let i = 1; i <= 999; i++) {
  numbers.push({
    numero: i.toString().padStart(3, '0'),
    vendido: vendidos.includes(i)
  });
}
window.numbers = numbers;
