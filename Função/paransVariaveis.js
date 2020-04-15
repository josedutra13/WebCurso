function soma(){
    let soma = 0
    for(i in arguments){//arguments e um array interno de uma função , que tem todos os argumentos que foram passados 
        soma += arguments[i] // += atribuição aditiva
    }
     return soma
}
console.log(soma())
console.log(soma(1,5))
console.log(soma(2,3,5,6))
console.log(soma(1,5.5,"Teste"))
console.log(soma('a','b','c'))

function sub(){
    let sub = 0
    for(i in arguments){
        sub -= arguments[i]// sub = sub-arguments
    }
    return sub
}

console.log(sub(1,3))
console.log(sub(9,8))