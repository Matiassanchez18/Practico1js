const respuestas = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10]
let suma = 0;

for (let i=0; i < respuestas.length; i++){
    suma += respuestas[i];
}
 
porcentaje = suma / 20
console.log(porcentaje)
