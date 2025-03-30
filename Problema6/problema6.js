'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor))valor = 0;
    calcularAreaCuadro(valor);
  });  
});
/* 6.	Calcule el área de un cuadrado (se debe pedir al usuario los datos para el cálculo). Imprima el resultado. */
/**
 * Funcion que calcula el area de un cuadrado en base a uno de sus lados
 * @param {number} lado Medida de alguno de sus lados 
 * @returns {number}
 */
const calcularAreaCuadro = lado => {
  let area = Math.pow(lado, 2)
  $('#spanArea').html(area);
  return area;
}