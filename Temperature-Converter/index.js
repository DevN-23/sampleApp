const celcius_input = document.querySelector('#celcius > input');
const fahrenheit_input = document.querySelector('#fahrenheit > input');
const kelvin_input = document.querySelector('#kelvin > input');

function roundFigure(num) {
  return Math.round(num*100)/100;
}

function celciusToFK() {
  const c_temp = parseFloat(celcius_input.value);
  const f_temp = (c_temp * (9/5)) + 32;
  const k_temp = c_temp + 273.15;
  fahrenheit_input.value = roundFigure(f_temp);
  kelvin_input.value = roundFigure(k_temp);
}

function fahrenheitToCK() {
  const f_temp = parseFloat(fahrenheit_input.value);
  const c_temp = (f_temp - 32) * (9/5);
  const k_temp = (f_temp + 459.67) * 5/9;
  celcius_input.value = roundFigure(c_temp);
  kelvin_input.value = roundFigure(k_temp);
}

function kelvinToCF() {
  const k_temp = parseFloat(kelvin_input.value);
  const c_temp = k_temp - 273.15;
  const f_temp = 9/5 * (k_temp - 273) + 32;
  celcius_input.value = roundFigure(c_temp);
  fahrenheit_input.value = roundFigure(f_temp);
}

function main() {
  celcius_input.addEventListener('input', celciusToFK);
  fahrenheit_input.addEventListener('input', fahrenheitToCK);
  kelvin_input.addEventListener('input', kelvinToCF);
}

main();
