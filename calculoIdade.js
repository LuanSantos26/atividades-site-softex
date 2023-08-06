const readline = require('readline');

function calcularIdade(nome, anoNascimento) {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;
  return `Olá, ${nome}! Você completou, ou completará, ${idade} anos em ${anoAtual}.`;
}

function obterAnoNascimento() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Digite o ano de nascimento (entre 1922 e 2021): ", inputAno => {
      const anoNascimento = parseInt(inputAno);
      if (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
        console.log("Ano de nascimento inválido. Por favor, digite um ano entre 1922 e 2021.");
        rl.close();
        resolve(obterAnoNascimento());
      } else {
        rl.close();
        resolve(anoNascimento);
      }
    });
  });
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite seu nome completo: ", async nomeCompleto => {
    const anoNascimento = await obterAnoNascimento();
    const mensagem = calcularIdade(nomeCompleto, anoNascimento);
    console.log(mensagem);
    rl.close();
  });
}

main();
