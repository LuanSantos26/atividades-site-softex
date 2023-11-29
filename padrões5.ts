// Interface Galinha que representa as operações de uma galinha
interface Galinha {
    cacarejar(): void;
    voar(): void;
}

// Classe concreta que implementa a interface Galinha
class GalinhaComum implements Galinha {
    cacarejar(): void {
        console.log("Cocoricó!");
    }

    voar(): void {
        console.log("Galinhas não voam muito alto.");
    }
}

// Interface Pato que representa as operações de um pato
interface Pato {
    grasnar(): void;
    voar(): void;
}

// Classe concreta que implementa a interface Pato
class PatoComum implements Pato {
    grasnar(): void {
        console.log("Quack!");
    }

    voar(): void {
        console.log("Voando alto!");
    }
}

// Adaptador que permite que um Pato seja usado como se fosse uma Galinha
class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    voar(): void {
        this.pato.voar();
    }
}

// Demonstração do uso do AdaptadorPato
class AdaptadorPatoDemo {
    static run(): void {
        const patoComum: Pato = new PatoComum();
        const adaptadorPato: Galinha = new AdaptadorPato(patoComum);

        console.log("Ação de um pato:");
        patoComum.grasnar();
        patoComum.voar();

        console.log("\nAção de um adaptador de pato (usado como galinha):");
        adaptadorPato.cacarejar();
        adaptadorPato.voar();
    }
}

// Executando a demonstração
AdaptadorPatoDemo.run();
