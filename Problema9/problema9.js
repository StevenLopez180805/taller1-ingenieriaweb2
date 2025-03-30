'use strict'
$(() => {
  $(document).on('input', '#medidaBase, #medidaAltura', function(){
    let base = $('#medidaBase').val();
    let altura = $('#medidaAltura').val();
    if (base == '' || !isFinite(base))base = 0;
    if (altura == '' || !isFinite(altura))altura = 0;
    calcularAreaRectangulo(base, altura);
  });  
});
/* 9.	Calcule el área de un rectángulo (se debe pedir al usuario los datos para el cálculo). Imprima el resultado. */
/**
 * Funcion que calcula el area de un rectangulo con su base y altura.
 * @param {number} base Medida de la base
 * @param {number} altura Medida de la altura 
 * @returns {number}
 */
const calcularAreaRectangulo = (base, altura) => {
  let area = base * altura;
  $('#spanArea').html(area);
  return area;
}