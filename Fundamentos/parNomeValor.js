// par nome/valor
const saudacao  = 'Koe' // contexto léxico 1

function exec(){
    const saudacao = 'Da u papo' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome : 'Peta',
    idade : 32,
    peso : 100,
    endereco : {
        logradouro :'BLa bla ',
         numero: 23
    }
}// objetos

console.log(saudacao)
console.log(exec())
console.log(cliente)