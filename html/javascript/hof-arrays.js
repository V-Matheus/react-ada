// Every
// Retorna o verdadeiro se todos dos itens atender a condição

let numeros = [40, 34, 67, 89, 23, 10];
const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

console.clear();

// Some
// Retorna o verdadeiro se algum dos itens atender a condição

const numeros2 = [-1, 3, 6, -5];

const algumPossitivo = numeros2.some((elemento) => elemento > 0);
console.log(algumPossitivo);

console.clear();

// Map
// Ele cria um novo array a partir do array original

const numeros3 = [40, 34, 67, 89, 23, 10];

const novoArray = numeros3.map((elemento) => {
  return 1;
});

// Filter
// Sempre retorna de tamanho igual ou inferiror ao array original

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);

console.clear();

// Reduce

const numeros4 = [1, 2, 3, 4, 5];

const soma = numeros4.reduce((acc, numero) => {
 return numero + acc;
}, 0);

console.log(soma);
