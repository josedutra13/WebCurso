const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa vai sair do vetor, o pop retira o ultimo elemento do vetor

console.log(pilotos)

pilotos.push('Vesrtappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do vetor
console.log(pilotos)

pilotos.unshift('Hami')// adiciona um elemento no começo 
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,1,'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)// novo array array gerado a partir do metodo
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)