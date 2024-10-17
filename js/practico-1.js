const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];
let suma = 0;
let positiva = 0;
let negativa = 0;
let moda = respuestas [0];


// El promedio de satisfacción.
for (let i = 0; i < respuestas.length; i++) {
  suma += respuestas[i];
}

porcentaje = suma / 20;
console.log(porcentaje);

// Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).
// Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).
// El porcentaje de clientes que están satisfechos e insatisfechos.
for (let i = 0; i < respuestas.length; i++) {
  if (respuestas[i] >= 7) {
    positiva++;
  } else if (respuestas[i] <= 4) {
    negativa++;
  }
}
console.log("Clientes satisfechos : " + positiva);
console.log("Clientes insatisfechos : " + negativa);

console.log('Porcentaje de clientes satisfechos: ' + Math.floor((positiva / 20) * 100) + '%');
console.log('Porcentaje de clientes insatisfechos: ' + Math.floor((negativa / 20) * 100) + '%');


// La calificación que se repitió más veces (moda).


