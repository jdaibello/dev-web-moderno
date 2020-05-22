const saudacao = 'Opa' // Contexto léxico 1

function exec() {
  const saudacao = 'Falaaa' // Contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de pares chave(nome)/valor
const cliente = {
  nome: 'João',
  idade: 20,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 1234
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)