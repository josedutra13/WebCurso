let aprovados = new Array('Bla','Ble')
console.log(aprovados)

aprovados = ['blu',3,4]
console.log(aprovados[3])
console.log(aprovados[0])
console.log(aprovados[2])

aprovados[3] = 'ies'
aprovados.push(44)// adicionar um elemento a + a partir do ultimo
console.log(aprovados[4])
console.log(aprovados.length)

aprovados[9] = 'Array'

console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort()// a função sort vai ordenar o vetor .
console.log(aprovados)

delete aprovados[5]// o delete deleta um elemento especifico do Array
console.log(aprovados)

aprovados = ['Bia','Jorge', 'Ana']
aprovados.splice(0,2,'Elemento 1', 'Elemento2')// serve para adicionar e remover elementos de um indice splice(indice, elemento que será excluido, adicionar elementos)console.log(aprovados)