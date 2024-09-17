function multiplicacao (numero1:number,numero2: number): number {
    return numero1 * numero2;
}

class pessoa {
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    dizOla():string {
        return `Olá ${this.nome}`
    }
}