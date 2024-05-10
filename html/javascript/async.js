const fs = require('fs');

// 1. Callback

// ReadFile (ler arquivo leva tempo)

// fs.readFile('./javascript/arquivo.txt', (error, conteudo) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(conteudo.toString());
//   }
// });

// exemplo 2

// setTimeout(() => {
//   console.log('executado após 2 segundos');
// }, 2 * 1000);

console.clear();

function lerArquivoPromise() {
  new Promise((resolve, reject) => {
    return fs.readFile('./javascript/arquivo.txt', (error, conteudo) => {
      if (error) {
        reject(error);
      } else {
        resolve(conteudo.toString());
      }
    });
  });
}

// lerArquivoPromise()
//   .then((retornoDaPromise) => {
//     console.log('ok, ', retornoDaPromise);
//   })
//   .catch((error) => {
//     console.log('vishh: ', error);
//   })
//   .finally(() => {
//     console.log(
//       'Sempre irá ser executado no final da promise, com erro ou não',
//     );
//   });

// Assync / await

async function leituraDeDados() {
  console.log('Isso é executado antes');

  try {
    const retornoDaPromise = await lerArquivoPromise(); // Espera a promesa ser resolvida para avançar

    console.log(retornoDaPromise);
    console.log('Isso irá ser executado depois');
  } catch (err) {
    console.log(err);
  }
}
