let dobro = function (a){
    return 2*a
}

dobro = (a) => {// o function foi trocado pela =>
    return 2*a
}

dobro = a => 2*a // e utilizados em funções que contém apenas uma linha de codigo, e tb e possivel não usar parenteses quando tem apenas um parametro, para diminuir a função ainda mais
// return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Hi'
}

ola = () => 'Hi'// funcao arrow
ola = _ => 'Hi'

console.log(ola())