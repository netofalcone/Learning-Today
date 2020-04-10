class Funcionario {

    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    //  se a taxa nao for informada, o default é 7.5
    //pagarImposto(taxa: number = 7.5) 
    pagarImposto(taxa: number) {
        
        console.log(` ${this.nome} está pagando  ${this.salario * taxa / 100} de imposto`);
    }

}

//-------------------------------

class Secretario extends Funcionario {

}

class Executivo extends Funcionario {

    pagarImpostoExecutivo(taxa: number = 27.5) {
        console.log('Executivo paga mais!');
        
       super.pagarImposto(taxa);
    }

}

let sarah = new Secretario('Sarah', 2000);
sarah.pagarImposto(7.5);

let jorge = new Executivo('Jorge', 30000);
jorge.pagarImpostoExecutivo();