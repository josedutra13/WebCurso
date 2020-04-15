/*const soma = function(a,b){
    return a+b
}*/
const soma = (a,b) => a+b // arrow function
const imprimirResult = function(a,b, operacao = soma){
    console.log(operacao(a,b)) 
}

imprimirResult(3,4)
imprimirResult(3,4,soma)
imprimirResult(3,4, (a,b)=> a-b)// função arrow

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()

mult = (c,d) => c*d// arrow function

console.log(mult(2,5))