// Interface comum para produtos (Computadores)
class Computer {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    toString() {
        return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Fábrica abstrata para criar computadores
class ComputerFactory {
    createComputer(type) {
        // Decide qual tipo de computador criar com base no tipo informado
        switch (type) {
            case "pc":
                return new PC();
            case "server":
                return new Server();
            default:
                throw new Error("Tipo de computador não suportado");
        }
    }
}

// Implementação concreta para PC
class PC extends Computer {
    constructor() {
        super(8, 512, 2.5);
        this.type = "PC";
    }
}

// Implementação concreta para Server
class Server extends Computer {
    constructor() {
        super(16, 1024, 3.0);
        this.type = "Server";
    }
}

// Exemplo de uso da fábrica e dos computadores
const computerFactory = new ComputerFactory();

const pc = computerFactory.createComputer("pc");
const server = computerFactory.createComputer("server");

console.log(pc.toString());        // Exemplo de saída: RAM: 8GB, HDD: 512GB, CPU: 2.5GHz
console.log(server.toString());    // Exemplo de saída: RAM: 16GB, HDD: 1024GB, CPU: 3.0GHz
