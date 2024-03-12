// Definir a função
function saudacao(nomeEstudante, curso = 'javascript') {
 return `Olá ${nomeEstudante}, seja bem vindo ao curso de ${curso}` 
}

const mensagemSaudacao = saudacao('matheus') // Chamar a função

console.log(mensagemSaudacao);

console.clear()

// Exemplo 2
function somar(num1, num2) {
  return num1 + num2
}

const resultado = somar(2,3)
console.log(resultado);

// Funções anônimas

const dobroDoNumero = function (numero) {
  return numero * 2
}

const dobro = dobroDoNumero(2)
console.log(dobro);

// Arrow functions

const subtrair = (num1, num2) => {
  return num1 - num2
}

const multiplicar = (num1, num2) => num1 * num2 