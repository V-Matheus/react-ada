"use strict";
let numero = 20;
const pi = 3.14;
let nome = 'Matheus';
let correta = true;
let resultado = numero * pi;
const nomeDoUsuario = prompt('Qual o teu nome? ');
console.log(nomeDoUsuario === null || nomeDoUsuario === void 0 ? void 0 : nomeDoUsuario.toLocaleLowerCase());
// number[] ou Array<number>
const numeros = [1, 2, 3, 4, 5];
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(18);
idades.push(16);
const menoresIdade = idades.filter((idade) => idade < 18);
console.log(menoresIdade);
// Tupla
const pessoaTupla = ['Matheus', 19];
const pessoa = {
    nome: 'Matheus',
    idade: 19,
    profissao: 'dev',
    altura: 1.8,
};
