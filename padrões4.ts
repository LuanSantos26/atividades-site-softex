// Interface para definir o contrato de um sanduíche
interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
}

// Implementação concreta do sanduíche de frango assado
class FrangoAssado implements Sanduiche {
    getDescricao(): string {
        return "Sanduíche de Frango Assado";
    }

    getCusto(): number {
        return 4.50;
    }
}

// Decorator base para ingredientes adicionais
abstract class IngredienteAdicional implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    abstract getDescricao(): string;

    abstract getCusto(): number;
}

// Implementação concreta do ingrediente adicional "Pepperoni"
class Pepperoni extends IngredienteAdicional {
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Pepperoni";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Implementação concreta do ingrediente adicional "Queijo Mussarela Ralado"
class QueijoMussarelaRalado extends IngredienteAdicional {
    getDescricao(): string {
        return this.sanduiche.getDescricao() + ", Queijo Mussarela Ralado";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 2.00;
    }
}

// Testando o padrão de projeto Decorator
const sanduicheBase: Sanduiche = new FrangoAssado();
console.log(`Sanduíche base: ${sanduicheBase.getDescricao()} custa $${sanduicheBase.getCusto().toFixed(2)}`);

// Adicionando pepperoni ao sanduíche
const sanduicheComPepperoni: Sanduiche = new Pepperoni(sanduicheBase);
console.log(`Sanduíche com Pepperoni: ${sanduicheComPepperoni.getDescricao()} custa $${sanduicheComPepperoni.getCusto().toFixed(2)}`);

// Adicionando queijo mussarela ralado ao sanduíche com pepperoni
const sanduicheCompleto: Sanduiche = new QueijoMussarelaRalado(sanduicheComPepperoni);
console.log(`Sanduíche completo: ${sanduicheCompleto.getDescricao()} custa $${sanduicheCompleto.getCusto().toFixed(2)}`);
