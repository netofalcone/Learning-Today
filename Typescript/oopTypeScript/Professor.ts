class Professor {

    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, eu sou o professor(a) ${this.nome} e tenho ${this.idade} anos`;
    }

}

let joao: Cliente = new Cliente('João', 25);
let apresentacao: string = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Professor('Maria', 23);
console.log(maria.apresentar());