//Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

var grausf = parseInt(prompt("Digite a temperatura em Fahrenheit"));
var Celsius = 5 * ((grausf-32) / 9);

console.log("A temperatura em Celcius é", Celsius);