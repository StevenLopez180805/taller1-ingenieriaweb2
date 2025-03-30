'use strict'
$(() => {
  $(document).on('input', '#base, #exponente', function(){
    let base = $('#base').val();
    let exponente = $('#exponente').val();
    if (base == '' || !isFinite(base))base = 0;
    if (exponente == '' || !isFinite(exponente))exponente = 0;
    calcularPotencia(base, exponente);
  });  
});
/* 13. Cree un programa donde se calcule la potencia x^y. Se debe recibir la base y la potencia, y no se puede utilizar el objeto Math. Imprima el resultado. */
/**
 * Funcion que calcula una potencia dada de un numero dado
 * @param {number} base Numero al que se le aplicara la potencia
 * @param {number} exponente Numero al que se elevara la base
 * @returns {number}
 */
const calcularPotencia = (base, exponente) => {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
      resultado *= base;
  }
  $('#spanResultado').html(resultado);
  return resultado;
};