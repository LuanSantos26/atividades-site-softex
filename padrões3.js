class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senha123";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senhaDigitada: string): void {
        if (senhaDigitada === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta. Bem-vindo, agente!");
        } else {
            console.log("Acesso negado. Cuidado, intruso!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Tentativa de acesso à Base Secreta
sistemaSeguranca.acessarBaseSecreta("senha123"); // Acesso concedido

// Tentativa de acesso com senha incorreta
sistemaSeguranca.acessarBaseSecreta("senha456"); // Acesso negado
