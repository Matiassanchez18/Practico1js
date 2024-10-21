const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];
let suma = 0;

let positiva = 0;
let negativa = 0;

let maximasCuenta = 0;
let modas = [];

// El promedio de satisfacción.
for (let i = 0; i < respuestas.length; i++) {
  suma += respuestas[i];
}

porcentaje = suma / 20;
document.write("<p> El promedio de satisfaccion es de: " + porcentaje +' </p>');

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
document.write("<p> Clientes satisfechos: " + positiva+'<br>');
document.write("Clientes insatisfechos: " + negativa+'</p>');

document.write(
  "<p> Porcentaje de clientes satisfechos: " +
    Math.floor((positiva / 20) * 100) +
    "%"+'<br>'
);
document.write(
  "Porcentaje de clientes insatisfechos: " +
    Math.floor((negativa / 20) * 100) +
    "%"+'</p>'
);

// La calificación que se repitió más veces (moda).

for (let i = 1; i <= 10; i++) {
  let cuenta = 0;

  for (let j = 0; j < respuestas.length; j++) {
    if (respuestas[j] === i) {
      cuenta++;
    }
  }

  if (cuenta > maximasCuenta) {
    maximasCuenta = cuenta;
    modas = [i];
  } else if (cuenta === maximasCuenta) {
    //push Agregar mas elementos al array
    modas.push(i);
  }
}
// join une todos los elementos de una array en forma de cadena
document.write(
  `<p> Las calificaciones que se repitieron más veces es: ${modas.join(", ")}`+ '<p/>'
);
