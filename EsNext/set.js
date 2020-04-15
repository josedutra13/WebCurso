// não aceita repetição / não indexado
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('FLAMENGO SELEÇÃO')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
times.delete('Palmeiras')

console.log(times.has('Palmeiras'))

const nomes = ['João', 'Joaquin', 'João','Manu']
const nomeSet = new Set(nomes)
console.log(nomeSet)