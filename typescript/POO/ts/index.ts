interface IPessoa {
  nome: string;
  idade: number;
  altura: number;

  dormir: () => void;
}

class Pessoa implements IPessoa {
  // Atributos: Características
  nome: string;
  idade: number;
  altura: number;
  private _cpf: string;

  // Método: Ação

  // Método construtor
  constructor(nome: string, idade: number, altura: number, cpf: string) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this._cpf = cpf;
  }

  dormir() {
    console.log('Dormingo ...');
  }

  // acessor: getter
  get cpf(): string {
    return this._cpf;
  }

  // acessor: setter
  set cpf(newCpf: string) {
    if(newCpf.length !== 14) {
      throw new Error("Cpf lenght is incorrect")
    }
    this._cpf = newCpf;
  }
}

class Professor extends Pessoa {
  codigo: string

  constructor(nome: string, idade: number, altura: number, cpf: string, codigo: string) {
    super(nome, idade, altura, cpf)
    this.codigo = codigo
  }

  ensinar() {
    console.log('Ensinando');
    
  }
}

// Criando uma pessoa apartir da Classe Pessoa

const pessoa1 = new Pessoa('Matheus', 19, 1.8, '123.456.789-00');
console.log(pessoa1);
console.log(pessoa1.cpf);


const professor = new Professor('Professor', 30, 1.78, '123.456.789-10', '0001')

console.log(professor);
