// Definir a função
function saudacao(nomeEstudante, curso = 'javascript') {
 return `Olá ${nomeEstudante}, seja bem vindo ao curso de ${curso}` 
}

const mensagemSaudacao = saudacao('matheus') // Chamar a função

console.log(mensagemSaudacao);

console.clear()

// Exemplo 2
// function somar(num1, num2) {
//   return num1 + num2
// }

// const resultado = somar(2,3)
// console.log(resultado);

// Funções anônimas

const dobroDoNumero = function (numero) {
  return numero * 2
}

const dobro = dobroDoNumero(2)
console.log(dobro);

// Arrow functions

// const subtrair = (num1, num2) => {
//   return num1 - num2
// }

// const multiplicar = (num1, num2) => num1 * num2 

console.clear()

// funcoes de alta ordem

// 1º Função que retorna outra função

function welcome(courseName ) {
  return (estutantsName) => {
    console.log(`Ola ${estutantsName}, bem vindo ao curso de ${courseName}`);
  }
}

const welcomeToFrontEndCorse = welcome('frontEnd em React')

welcomeToFrontEndCorse('Matheus')

console.clear()

// 2º Funções que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

const calcular = (num1, num2, operacao) => operacao(num1, num2)

const retorno = calcular(10, 5, multiplicar)

console.log(retorno);

const resultado = calcular(10, 5, (num1, num2) => (num1 * num2) + (2 * num1 * num2))

console.log(resultado);