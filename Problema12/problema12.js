'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor) || valor < 2)valor = 2;
    calcularFibonacci(valor);
  });  
})
/* 12. Realice un programa que calcule los primeros 10 números de la sucesión Fibonacci. Imprima el resultado. */
/**
 * Funcion que calcula la sucesion de numeros de Fibonacci
 * @param {number} numero Cantidad de numeros de la secuencia a devolver
 * @returns {array}
 */
const calcularFibonacci = numero => {
  $('#divSecuencias').html(`
    <div class="col-12 text-center">
      <p class="m-0 p-0"><span class="fw-semibold">1: </span> 0</p>
    </div>
    <div class="col-12 text-center">
      <p class="m-0 p-0"><span class="fw-semibold">2: </span> 1</p>
    </div>
  `);
  let serie = [0, 1];
  for (let i = 2; i < numero; i++) {
    let numSerie = serie[i - 1] + serie[i - 2];
    $('#divSecuencias').append(`
      <div class="col-12 text-center">
        <p class="m-0 p-0"><span class="fw-semibold">${(i + 1)}: </span> ${numSerie}</p>
      </div>
    `);
    serie.push(numSerie);
  }
  return serie;
};