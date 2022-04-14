//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

var hora = parseInt(prompt("Quando você ganha por hora?"));
var horas_trabalhadas = parseInt(prompt("Quantas horas você trabalha por mês?"));   

var salario = hora * horas_trabalhadas;

console.log("O salário do mês é: ", salario);