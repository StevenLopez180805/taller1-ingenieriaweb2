'use strict'
$(() => {
  $(document).on('input', '#numeroProbar', function(){
    let valor = $(this).val();
    if (valor == '' || !isFinite(valor))valor = 0;
    convertirMetros(valor);
  });  
})
/* 5. Dado un número o valor en metros (m), realice el cálculo de conversión a km, hm, dm, cm y mm. Imprima el resultado. */
/**
 * Funcion que pasa una determinada cantidad de metros a km, hm, dm, cm y mm.
 * @param {number} numero metros 
 * @returns {object} {km: number, hm: number, dm: number, cm: number, mm: number}
 */
const convertirMetros = metros => {
  let conversiones = {
    km: metros / 1000,
    hm: metros / 100,
    dm: metros * 10,
    cm: metros * 100,
    mm: metros * 1000
  }
  
  $('#spanKm').html(conversiones.km);
  $('#spanHm').html(conversiones.hm);
  $('#spanDm').html(conversiones.dm);
  $('#spanCm').html(conversiones.cm);
  $('#spanMm').html(conversiones.mm);
  
  return conversiones;
};