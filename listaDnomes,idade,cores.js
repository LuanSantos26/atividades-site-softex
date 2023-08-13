const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nomes = [
  'Ana',
  'Bruno',
  'Carla',
  'Daniel',
  'Elena',
  'Fernando',
  'Gisele',
  'Hugo',
  'Isabel',
  'João'
];

const idades = [25, 30, 22, 28, 34, 29, 31, 27, 24, 33];

const coresFavoritas = [
  'azul',
  'verde',
  'amarelo',
  'vermelho',
  'roxo',
  'laranja',
  'rosa',
  'preto',
  'branco',
  'cinza'
];

function imprimirInformacoes() {
  console.log('Informações Iniciais:');
  for (let i = 0; i < nomes.length; i++) {
    console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}, Cor Favorita: ${coresFavoritas[i]}`);
  }
}

function realizarModificacoes() {
  rl.question('\nDigite o índice da pessoa para alterar a idade (0-9): ', (indice) => {
    const newAge = parseInt(indice);
    if (isNaN(newAge) || newAge < 0 || newAge >= idades.length) {
      console.log('Índice inválido. As idades não serão alteradas.');
      finalizarPrograma();
      return;
    }

    rl.question('Digite a nova idade: ', (novaIdade) => {
      idades[newAge] = parseInt(novaIdade);

      rl.question('\nDigite o índice da pessoa para alterar a cor favorita (0-9): ', (indiceCor) => {
        const newColor = parseInt(indiceCor);
        if (isNaN(newColor) || newColor < 0 || newColor >= coresFavoritas.length) {
          console.log('Índice inválido. As cores favoritas não serão alteradas.');
          finalizarPrograma();
          return;
        }

        rl.question('Digite a nova cor favorita: ', (novaCor) => {
          coresFavoritas[newColor] = novaCor;

          console.log('\nModificações realizadas com sucesso!\n');
          imprimirInformacoes();
          finalizarPrograma();
        });
      });
    });
  });
}

function finalizarPrograma() {
  rl.close();
}

console.log('Informações Iniciais:\n');
imprimirInformacoes();
realizarModificacoes();
