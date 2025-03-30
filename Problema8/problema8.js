'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor))valor = 0;
    calcularAreaCirculo(valor);
  });  
})
/* 8. Calcule el área de un círculo (se debe pedir al usuario los datos para el cálculo). Imprima el resultado. */
/**
 * Funcion que calcula el area de un circulo con base a su radio.
 * @param {number} radio Medida del radio
 * @returns {number}
 */
const calcularAreaCirculo = radio => {
  let area = Math.PI * Math.pow(radio, 2);
  $('#spanArea').html(area);
  return area;
}