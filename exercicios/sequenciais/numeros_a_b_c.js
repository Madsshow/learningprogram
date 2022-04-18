//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

var int1 = parseInt(prompt("Digite um número inteiro."));
var int2 = parseInt(prompt("Digite outro número inteiro."));
var real = parseFloat(prompt("Digite um número real."));
var produto = (int1 * 2 + 0,5 * int2);
console.log("O produto do dobro de:", int1, "mais metade de", int2, "é", produto);