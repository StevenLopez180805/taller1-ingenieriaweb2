'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor))valor = 0;
    calcularFactorial(valor);
  });  
});
/* 14. Escriba un programa que calcule la factorial de un número introducido por teclado. Para todo número natural n, se llama n factorial o factorial de n al producto de todos los enteros entre 1 y n. Imprima el resultado. */
/**
 * Funcion que calcula el factorial de un determiando numero
 * @param {number} base Numero del que se calculara el factorial
 * @returns {number}
 */
const calcularFactorial = numero => {
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
      resultado *= i;
  }
  $('#spanFactorial').html(resultado);
  return resultado;
};