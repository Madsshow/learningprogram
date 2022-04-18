//Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

var int1 = parseInt(prompt("Digite um número inteiro."));
var int2 = parseInt(prompt("Digite outro número inteiro."));
var real = parseFloat(prompt("Digite um número real."));
var produto = (int1 * 2) * (int2 / 2);
var soma = (3 * int1) + (real);
var cubo = (Math.pow(real, 3));
   
    console.log("O produto é:", produto);
    console.log("A soma é:", soma);
    console.log("O cubo é:", cubo); 