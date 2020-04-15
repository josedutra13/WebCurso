const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
Olá
${nome}!

`
console.log(concatenacao,template)

// expressoes...

console.log(`1+1 = ${1+1}`)// o template só irá funcionar dentro da expressão `${} ! `

const up = s => s.toUpperCase ()
console.log(`Eiii ${up('cuidado')}!`)