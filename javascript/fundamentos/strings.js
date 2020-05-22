const escola = "Nota 1000"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('1'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Não incluí o índice 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(0, 'o'))

console.log('Ana,Maria,Pedro'.split(','))