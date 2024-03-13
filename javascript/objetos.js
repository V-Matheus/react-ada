// Object Literal

const array = ['Matheus', 19, 1.80, true]

const pessoa = {nome: 'Matheus', anos: 19, altura: 1.80, matriculado: true}

console.log(pessoa);

pessoa.nome = 'victor matheus'

delete pessoa.altura

const idade = 19
const altura = 1.80

console.clear()

const objeto = {
  idade: idade,
  altura: altura,
}

console.log(objeto);

const {nome} = pessoa