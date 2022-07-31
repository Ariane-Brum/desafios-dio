// Como podemos melhorar o esse código usando TS?

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz";

// let pessoa2 = {};
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//   nome: "laura",
//   idade: "32",
//   profissao: "Atriz",
// };

// let pessoa4 = {
//   nome = "carlos",
//   idade = 19,
//   profissao = "padeiro",
// };

interface IPessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

enum Profissao {
  Atriz,
  Padeiro,
}

let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};

let pessoa2: IPessoa = {
  nome: "Roberto",
  idade: 45,
  profissao: Profissao.Padeiro,
};

let pessoa3: IPessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.Atriz,
};

let pessoa4: IPessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

console.log(pessoa1, pessoa2, pessoa3, pessoa4);
