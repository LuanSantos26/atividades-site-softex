// Definição do objeto material: Carro
function Carro(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;

    this.acelerar = function (aceleracao) {
        this.velocidadeAtual += aceleracao;
        console.log(`Acelerando. Velocidade atual: ${this.velocidadeAtual} km/h`);
    };

    this.frear = function (desaceleracao) {
        this.velocidadeAtual -= desaceleracao;
        console.log(`Freando. Velocidade atual: ${this.velocidadeAtual} km/h`);
    };

    this.ligarDesligar = function () {
        console.log("Ligando/Desligando o carro");
    };
}

// Exemplo de uso do objeto Carro
let meuCarro = new Carro("Civic", "Prata");
meuCarro.ligarDesligar();
meuCarro.acelerar(50);
meuCarro.frear(20);

// Definição do objeto material: Livro
function Livro(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;

    this.abrir = function () {
        console.log("Abrindo o livro");
    };

    this.fechar = function () {
        console.log("Fechando o livro");
    };

    this.ler = function () {
        console.log("Lendo o livro");
    };
}

// Exemplo de uso do objeto Livro
let meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1000);
meuLivro.abrir();
meuLivro.ler();
meuLivro.fechar();

// Definição do objeto abstrato: Conta Bancária
function ContaBancaria(saldo, numeroConta, titularConta) {
    this.saldo = saldo;
    this.numeroConta = numeroConta;
    this.titularConta = titularConta;

    this.depositar = function (valor) {
        this.saldo += valor;
        console.log(`Depositando. Novo saldo: ${this.saldo}`);
    };

    this.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Sacando. Novo saldo: ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente");
        }
    };

    this.verificarSaldo = function () {
        console.log(`Saldo atual: ${this.saldo}`);
    };
}

// Exemplo de uso do objeto Conta Bancária
let minhaConta = new ContaBancaria(1000, "123456", "João");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.verificarSaldo();

// Definição do objeto abstrato: Usuário
function Usuario(nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;

    this.enviarMensagem = function () {
        console.log("Enviando mensagem...");
    };

    this.atualizarPerfil = function () {
        console.log("Atualizando perfil...");
    };

    this.visualizarNotificacoes = function () {
        console.log("Visualizando notificações...");
    };
}

// Exemplo de uso do objeto Usuário
let novoUsuario = new Usuario("Maria", 25, "maria@email.com");
novoUsuario.enviarMensagem();
novoUsuario.atualizarPerfil();
novoUsuario.visualizarNotificacoes();
