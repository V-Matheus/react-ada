"use strict";
class Pessoa {
    // Método: Ação
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log('Dormingo ...');
    }
    // acessor: getter
    get cpf() {
        return this._cpf;
    }
    // acessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("Cpf lenght is incorrect");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log('Ensinando');
    }
}
// Criando uma pessoa apartir da Classe Pessoa
const pessoa1 = new Pessoa('Matheus', 19, 1.8, '123.456.789-00');
console.log(pessoa1);
console.log(pessoa1.cpf);
const professor = new Professor('Professor', 30, 1.78, '123.456.789-10', '0001');
console.log(professor);
