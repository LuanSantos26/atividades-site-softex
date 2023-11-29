// Interface Strategy
class OperationStrategy {
    execute(num1, num2) {
      throw new Error("Método execute deve ser implementado nas classes concretas.");
    }
  }
  
  // Classes concretas que implementam a Strategy
  class AdditionStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtractionStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicationStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculator {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calculate(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Exemplo de uso
  const calculator = new Calculator(new AdditionStrategy());
  
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  const operation = prompt("Digite a operação (+, -, *):");
  
  // Definir qual Strategy será usada com base na operação informada
  switch (operation) {
    case "+":
      calculator.setStrategy(new AdditionStrategy());
      break;
    case "-":
      calculator.setStrategy(new SubtractionStrategy());
      break;
    case "*":
      calculator.setStrategy(new MultiplicationStrategy());
      break;
    default:
      console.log("Operação inválida.");
      break;
  }
  
  // Imprimir o resultado da operação
  if (calculator.strategy) {
    const result = calculator.calculate(num1, num2);
    console.log(`Resultado da operação: ${result}`);
  }
  