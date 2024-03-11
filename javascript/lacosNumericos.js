const promt = require('readline-sync')
let i;

for (i = 0; i < 5; i++) {
  console.log(i);
}

console.clear()

let maiorNumero = 0
let numeroInformado;

// for(let i = 0; i <= 5; i++) {
//   numeroInformado = Number(promt.question('Informe um número positivo: '))

//   if(numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado
//   }
// }

console.log('Maior número: ', maiorNumero);

console.clear()

// For na string

const nome = 'Matheus'

for(let i= 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.clear()

// Arrays

const notasDoAluno = [10, 8, 5]

const arr = [27, 85, 15, 2, 69]

for(let i = 0; i < arr.length; i++) {
  console.log(i, arr[i])
}

console.clear()

for(const elements of arr) {
  console.log(elements);
}