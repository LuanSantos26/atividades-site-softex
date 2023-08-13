const readline = require('readline');

const candidates = {
  X: 'candidato_X',
  Y: 'candidato_Y',
  Z: 'candidato_Z',
  B: 'branco'
};

const votes = {
  candidato_X: 0,
  candidato_Y: 0,
  candidato_Z: 0,
  branco: 0,
  nulo: 0
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printResults() {
  console.log('Resultado da eleição:');
  for (const candidate in votes) {
    console.log(`${candidates[candidate]}: ${votes[candidate]} votos`);
  }

  const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
  console.log(`Vencedor: ${candidates[winner]} com ${votes[winner]} votos`);

  rl.close();
}

function vote() {
  rl.question('Digite o número do candidato (X, Y, Z) ou B para branco (ou "sair" para finalizar a votação): ', (answer) => {
    const candidate = answer.toUpperCase();

    if (candidate === 'X' || candidate === 'Y' || candidate === 'Z' || candidate === 'B') {
      votes[candidates[candidate]] += 1;
    } else if (candidate === 'SAIR') {
      printResults();
      return;
    } else {
      console.log('Voto nulo.');
      votes.nulo += 1;
    }

    vote();
  });
}

console.log('Simulação de Eleição\n');
vote();
