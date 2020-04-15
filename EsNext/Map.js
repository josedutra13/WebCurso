const tecnologias = new Map()
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})// o set e usado para retornar o dado

console.log(tecnologias.get('angular'))// o objeto será retornado a partir do get, pois o get pega o valor do set.
const chavesVariadas = new Map(
    [ [function() {}, 'Função'],
    // o primeiro elemento vai ser a chave, e o segundo elemento o valor. O map usa colchetes para armazenar os atributos.
     [{},'Objeto'], 
     [123,'Numero'],])

     chavesVariadas.forEach((v1, ch) => 
     { console.log(v1,ch)})
     console.log(chavesVariadas.has(123))// o has vai informar se o elemento informado está dentro da função map

     chavesVariadas.delete(123)// deleta o elemento 123 de dentro da função map
     console.log(chavesVariadas.has(123))

     console.log(chavesVariadas.size)// o size mostra quantos elementos estão contidos na função map

     chavesVariadas.set(123,'a')
     chavesVariadas.set(123,'b')// a chave não aceitara repetição
     console.log(chavesVariadas)