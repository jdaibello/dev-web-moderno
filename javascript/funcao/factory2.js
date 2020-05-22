// Função Factory: Função que retorna um objeto
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Celular', 1500.00))
console.log(criarProduto('Tablet', 2500.00))