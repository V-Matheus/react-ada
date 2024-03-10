const promt = require('readline-sync');
// let saldo = Number(promt.question('Qual eh o seu saldo ?'));

// while (saldo < 0) {
//   saldo = Number(promt.question('Saldo inválido. Digite novamente: '));
// }

// console.log(saldo);

// Exemplo 2
// let notaAluno = Number(promt.question('Informe a nota do aluno'));

// let somaNotas = 0; // Acumulador
// let notasValidas = 0;

// while (notaAluno >= 0) {
//   somaNotas += notaAluno;
//   notasValidas++;
//   notaAluno = Number(promt.question('Informe a próxima nota'));
// }

// console.log(somaNotas);
// console.log(notasValidas);

// Exemplo 3

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroUsuario = Number(promt.question('Informe um número entre 0 e 10: '));
while (numeroUsuario !== numeroAleatorio) {
  numeroUsuario = Number(
    promt.question('Você errou, Informe um número entre 0 e 10: '),
  );
}

console.log('Parabens!');
