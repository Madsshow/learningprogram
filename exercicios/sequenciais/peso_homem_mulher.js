//Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7

var altura = parseFloat(prompt("Digite a altura:"))
var genero = parseFloat(prompt("Qual o genero da pessoa?"))
var homem = (72.7*altura) - 58;
var mulher = (62.1*altura) - 44.7;

if (genero = homem){
    console.log("O peso ideal para este homem é:", homem)
}
if (genero = mulher){
    console.log("O peso ideal da mulher é:", mulher)
};

