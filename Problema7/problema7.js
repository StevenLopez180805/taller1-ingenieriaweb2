'use strict'
$(() => {
  $(document).on('input', '#medidaBase, #medidaAltura', function(){
    let base = $('#medidaBase').val();
    let altura = $('#medidaAltura').val();
    if (base == '' || !isFinite(base))base = 0;
    if (altura == '' || !isFinite(altura))altura = 0;
    calcularAreaTriangulo(base, altura);
  });  
});
/* 7. Calcule el área de un triángulo equilátero (se debe pedir al usuario los datos para el cálculo). Imprima el resultado. */
/**
 * FFuncion que calcula el area de un tringulo equilatero con su base y altura.
 * @param {number} base Medida de la base
 * @param {number} altura Medida de la altura 
 * @returns {number}
 */
const calcularAreaTriangulo = (base, altura) => {
  let area = base * altura / 2;
  $('#spanArea').html(area);
  return area;
}