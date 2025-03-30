'use strict'
$(document).on('input', '#numeroProbar', function(){
  let valor = $(this).val();
  if (valor != '' && isFinite(valor)) {
    $('#divNaturaleza').html(validarPrimos(valor)?'Es primo':'No es primo');
  }else{
    $('#divNaturaleza').html('&nbsp;');
  }
});
/* 11. Realice un programa que reciba un número y que determine si este es un número primo. Imprima el resultado. */
/**
 * Funcion que valida si un determinado numero es primo
 * @param {number} numero Numero a validar
 * @returns {boolean}
 */
const validarPrimos = numero => {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
  }
  return true;
};