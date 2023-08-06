const prompt = require('prompt-sync')();


function calculadora() {

        let resultado = 0;
        let operacao = prompt("Informe a operação (1: Soma 2: Subtração 3: Multiplicação 4: Divisão 0: Sair): ");
        let numero1 = "";
        let numero2 = "";

        
        if (operacao != 0) {

            switch (operacao) {
                case "1":
                    console.log("Adição Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 + numero2;
                    console.log(`O resultado da soma é: ${resultado}`);
                    calculadora();
                    break;    
                    
                case "2":
                    console.log("Subtração Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 - numero2;
                    console.log(`O resultado da subtração é: ${resultado}`);
                    calculadora();
                    break;         
                   
                case "3":
                    console.log("Multiplicação Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 * numero2;
                    console.log(`O resultado da Multiplicação é: ${resultado}`);
                    calculadora();
                    break;         
                    
                case "4":
                    console.log("Divisão Selecionada!");
                    numero1 = parseFloat(prompt("Informe o 1º número: "));    
                    numero2 = parseFloat(prompt("Informe o 2º número: "));
                    resultado = numero1 / numero2;
                    console.log(`O resultado da Divisão é: ${resultado}`);
                    calculadora();
                    break; 
    
                case "0":
                    console.log("Saindo!");
                    break;        
                    
                default:
                    console.log("Essa opção não existe!");
                    calculadora();
                    break;             
             }
            
        } else {
            console.log("Saindo!");
        }
        

          
}
calculadora();