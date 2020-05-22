const pesssoa = {
  nome: 'Rebeca',
  idade: 89,
  peso: 62
}

console.log(Object.keys(pesssoa))
console.log(Object.values(pesssoa))
console.log(Object.entries(pesssoa))

Object.entries(pesssoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pesssoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2017'
})

pesssoa.dataNascimento = '01/01/2019'
console.log(pesssoa.dataNascimento)
console.log(Object.keys(pesssoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)