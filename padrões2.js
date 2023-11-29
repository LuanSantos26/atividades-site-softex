// Classe abstrata Veículo
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        // Cria um novo objeto usando o protótipo do objeto atual
        return Object.create(this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
}

// Subclasse Carro que estende Veículo
class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    // Sobrescreve o método clone para copiar os campos adicionais
    clone() {
        return Object.create(this);
    }

    // Sobrescreve o método represent para incluir o número de portas
    represent() {
        return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
    }
}

// Subclasse Moto que estende Veículo
class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;
    }

    // Sobrescreve o método clone para copiar os campos adicionais
    clone() {
        return Object.create(this);
    }

    // Sobrescreve o método represent para incluir as cilindradas
    represent() {
        return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
}

// Classe Aplicação
class Aplicacao {
    static criarArrayDeVeiculos() {
        const veiculos = [];

        // Criando seis veículos com dois tipos diferentes (Carro e Moto) usando o método clone
        const carro1 = new Carro("Civic", "Honda", "Preto", 4, 4);
        veiculos.push(carro1.clone());

        const carro2 = new Carro("Corolla", "Toyota", "Prata", 4, 2);
        veiculos.push(carro2.clone());

        const moto1 = new Moto("Ninja", "Kawasaki", "Verde", 2, "600cc");
        veiculos.push(moto1.clone());

        const moto2 = new Moto("Harley", "Davidson", "Preto", 2, "1200cc");
        veiculos.push(moto2.clone());

        return veiculos;
    }

    static clonarArrayDeVeiculos(veiculos) {
        // Criando um array de clones utilizando o método clone
        return veiculos.map(veiculo => veiculo.clone());
    }
}

// Testando a aplicação
const veiculos = Aplicacao.criarArrayDeVeiculos();
const clones = Aplicacao.clonarArrayDeVeiculos(veiculos);

// Imprimindo o retorno da função represent de cada elemento do array de clones
clones.forEach(veiculo => {
    console.log(veiculo.represent());
});
