'use strict'

$(() => {
  let notas = [
    50,
    10,
    33
  ]
  calcularPromedio(notas);
})

/* 3.	Si se tienen tres notas de un estudiante, calcule el promedio. Imprima las notas y el promedio. */
/**
 * Funcion que determina el promedio de una lista de numeros
 * @param {number[]} numeros Arreglo de numeros
 * @returns {Boolean}
 */
const calcularPromedio = numeros => {
  let total = 0, promedio = 0;
  numeros.forEach(numero => {
    $('#divNotas').append(`
      <div class="col-12 mb-2"><span class="fw-semibold">Nota: </span>${numero}</div>  
    `);
    total += numero;   
  });
  promedio = total / numeros.length
  $('#pPromedio').html(`<span class="fw-semibold">Promedio de notas:</span> ${promedio}`);
  return promedio;
}