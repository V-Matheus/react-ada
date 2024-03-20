let numero = 20;
const pi = 3.14;

let nome = 'Matheus';

let correta = true;

let resultado = numero * pi;

// const nomeDoUsuario = prompt('Qual o teu nome? ');

// console.log(nomeDoUsuario?.toLocaleLowerCase());

// number[] ou Array<number>
const numeros: number[] = [1, 2, 3, 4, 5];

const idades: number[] = [];

idades.push(23);
idades.push(38);
idades.push(12);
idades.push(18);
idades.push(16);

const menoresIdade = idades.filter((idade) => idade < 18);

console.log(menoresIdade);

// Tupla
const pessoaTupla: [string, number] = ['Matheus', 19];

// Object Types

// Interface
interface PersonInterface {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
}

// Type

type PersonType = {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
};

const pessoa: PersonType = {
  nome: 'Matheus',
  idade: 19,
  profissao: 'dev',
  altura: 1.8,
};

type Criterio = 'greater' | 'lower';

function getNumber(num1: number, num2: number, criterio?: Criterio): number {
  switch (criterio) {
    case 'greater':
      return num1 > num2 ? num1 : num2;
    case 'lower':
      return num1 < num2 ? num1 : num2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return num1;
      return num2;
  }
}

const numeroEscolhido = getNumber(10, 20, 'lower');

console.log(numeroEscolhido);


// Utility types

// Partial

type PersonPartial = Partial<PersonType>

// Require

type personRequire = Required<PersonType>

// pick

type PersonPicked = Pick<PersonType, 'nome' | 'idade'>

// Omit

type PersonOmity = Omit<PersonType, 'profissao' >

// Exclude

type criterioExclude = Exclude<Criterio, 'greater'>

// Record

type Pessoas = Record<string, PersonType>

const pessoas: Pessoas = {
  '123.456.789-00': {
    nome: 'Fulano',
    idade: 20,
    altura: 1.75
  }
}