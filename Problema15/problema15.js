'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    determinarCantDigitos($(this).val());
  });  
});
/* 15. Dado un número entero positivo N, escribe un programa que determine cuántos dígitos se necesitan para escribir el valor N. Por ejemplo, 99 necesita 2 dígitos, 115 necesita 3, para 1000 la salida es 4, etc. Imprima el resultado. */
/**
 * Funcion que determina la cantidad de digitos que se necesitan para imprimir un determinado valor
 * @param {number} numero Numero del que se determinaran la cantidad de caracteres
 * @returns {number}
 */
const determinarCantDigitos = numero => {
  numero = numero.toString();
  let cant = numero.length;
  $('#spanDigitos').html(cant);
  return cant;
};