const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const animals = [
  ['Leão', 'Felino', 8],
  ['Elefante', 'Mamífero', 15],
  ['Girafa', 'Mamífero', 10],
  ['Tigre', 'Felino', 6],
  ['Cachorro', 'Mamífero', 4]
];

function imprimirAnimais() {
  console.log('Lista de Animais:');
  console.log('------------------------------------------');
  console.log('| Nome       | Espécie    | Idade (anos) |');
  console.log('------------------------------------------');

  for (const animal of animals) {
    const [nome, especie, idade] = animal;
    console.log(`| ${nome.padEnd(11)} | ${especie.padEnd(11)} | ${idade.toString().padEnd(13)} |`);
  }

  console.log('------------------------------------------');
}

function adicionarAnimal() {
  rl.question('\nDigite o nome do animal: ', (nome) => {
    rl.question('Digite a espécie do animal: ', (especie) => {
      rl.question('Digite a idade do animal: ', (idade) => {
        const novoAnimal = [nome, especie, parseInt(idade)];
        animals.push(novoAnimal);
        console.log('\nAnimal adicionado com sucesso!\n');
        imprimirAnimais();
        finalizarPrograma();
      });
    });
  });
}

function finalizarPrograma() {
  rl.close();
}

console.log('Gestão de Animais\n');
imprimirAnimais();
adicionarAnimal();
