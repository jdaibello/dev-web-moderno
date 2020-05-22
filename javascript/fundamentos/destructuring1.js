// Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 40,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bomHumor = true } = pessoa
console.log(sobrenome, bomHumor)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num) // TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.