const prompt = require ('prompt-sync')
// Solicita ao usuário que insira as três notas
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

// Calcula a média das notas
var media = (nota1 + nota2 + nota3) / 3;

// Exibe a média no console
console.log("A média das notas é: " + media);
