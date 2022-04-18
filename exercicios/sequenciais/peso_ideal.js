//Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

var altura = parseFloat(prompt("Digite a altura da pessoa:"));
var peso_ideal = (72.7*altura) - 58; 

console.log("O peso ideal da pessoa é:", peso_ideal);
