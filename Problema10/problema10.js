'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor))valor = 0;
    convertirCelsiusAFahrenheit(valor);
  });  
});
/* 10. Realice un programa que convierta una temperatura dada en grados centígrados a grados Fahrenheit. */
/**
 * Funcion que convierte grados celsius a grados Fahrenheit
 * @param {number} celsius Cantidad de grados celsius
 * @returns {number}
 */
const convertirCelsiusAFahrenheit = celsius => {
  let convertido = (celsius * 9/5) + 32;
  $('#spanFahrenheit').html(convertido);
  return convertido;
}