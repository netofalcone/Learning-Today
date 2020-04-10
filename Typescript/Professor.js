class Professor {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá, eu sou o professor(a) ${this.nome} e tenho ${this.idade} anos`;
    }
}
let joao = new Professor('João', 25);
let apresentacao = joao.apresentar();
console.log(apresentacao);

let maria = new Professor('Maria', 23);
console.log(maria.apresentar());
