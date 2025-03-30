'use strict'

$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor != '' && isFinite(valor)) {
      $('#divPar').html(determinarPar(valor)?'Par':'Impar');
    }else{
      $('#divPar').html('&nbsp;');
    }
  });  
})

/* 2.	Realice un programa que reciba un número y que determine si es par o impar. Imprima el resultado. */
/**
 * Funcion que determina si un numero es par
 * @param {number} numero Numero a determinar 
 * @returns {boolean}
 */
const determinarPar = numero => numero % 2 == 0