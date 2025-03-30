'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor != '' && isFinite(valor)) calcularPotencias(valor);
  });  
})
/* 4.	Lea un número y calcule el cuadrado y el cubo. Imprima las notas y el promedio. */
/**
 * Funcion que calcula el cuadrado y el cubo de un determinado numero y lo imprime en pantalla
 * @param {number} numero Numero a determinar 
 * @returns {object} {cuadrado: number, cubo: number}
 */
const calcularPotencias = numero => {
  let potencias = {
    cuadrado: Math.pow(numero, 2),
    cubo: Math.pow(numero, 3)
  }
  $('#pCuadrado').html(`<span class="fw-semibold">Cuadrado: </span> ${potencias.cuadrado}`);
  $('#pCubo').html(`<span class="fw-semibold">Cubo: </span> ${potencias.cubo}`);
  return potencias;
};