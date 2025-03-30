'use strict'

$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor != '' && isFinite(valor)) {
      $('#divNaturaleza').html(determinarPositivo(valor)?'Positivo':'Negativo');
    }else{
      $('#divNaturaleza').html('&nbsp;');
    }
  });  
})
/* 1.	Realice un programa que reciba un número y que determine si es positivo o negativo. Imprima el resultado. */
/**
 * Funcion que determina si un numero es positivo
 * @param {number} numero Numero a determinar 
 * @returns {boolean}
 */
const determinarPositivo = numero => numero >= 0