try {
    // Solicita números ao usuário
    let numero1 = prompt("Informe o primeiro número:");
    let numero2 = prompt("Informe o segundo número:");

    // Converte os números para valores numéricos
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Verifica se o segundo número é zero
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }

    // Realiza a divisão
    let resultado = numero1 / numero2;

    // Exibe o resultado
    console.log(`Resultado da divisão: ${resultado}`);

} catch (erro) {
    // Captura e trata a exceção
    console.error(`Erro: ${erro.message}`);

} finally {
    // Executa este bloco independentemente de ocorrer uma exceção ou não
    console.log("Bloco finally sempre é executado.");
}
