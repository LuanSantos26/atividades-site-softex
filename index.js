function calculadora(num1, num2, operacao) {
  // Verificar se a operação é válida (1 a 4)
  if (operacao < 1 || operacao > 4) {
    return 0;
  }

  // Realizar a operação correspondente
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      // Verificar se o divisor não é zero antes da divisão
      return num2 !== 0 ? num1 / num2 : 0;
  }
}

// Exemplos de uso da função:
let num1 = console.log("digte um numero: ");
num1=parseInt;
let num2 = console.log("digite um seguro numero: ");
num=parseInt;
let operacao = console.log("digite o numero da operacao sendo 1 para soma, 2 para subtracao, 3 multiplicacao e 4 para divisao.");
operacao=parseInt; // 1: Soma, 2: Subtração, 3: Multiplicação, 4: Divisão
let resultado = calculadora(num1,num2, operacao);
console.log(resultado); // Exibe o resultado da operação