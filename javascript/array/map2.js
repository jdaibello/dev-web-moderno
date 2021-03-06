const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os preços

const paraObj = json => JSON.parse(json)
const preco = produto => produto.preco

const resultado = carrinho.map(paraObj).map(preco)
console.log(resultado)