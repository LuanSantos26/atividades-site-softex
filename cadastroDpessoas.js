// Cria um array para armazenar as informações das pessoas
const pessoas = [
    {
        nome: "João",
        salario: 50000,
        idade: 30,
        possuiDiploma: true
    },
    {
        nome: "Maria",
        salario: 60000,
        idade: 25,
        possuiDiploma: false
    },
    {
        nome: "Pedro",
        salario: 75000,
        idade: 35,
        possuiDiploma: true
    }
];

// Exemplo de acesso e exibição de informações
console.log("Nome: " + pessoas[0].nome);
console.log("Salário: " + pessoas[0].salário);
console.log("Idade: " + pessoas[0].idade);
console.log("Possui diploma: " + pessoas[0].possuiDiploma);
