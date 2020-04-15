// estrategia 1 para gerar valor padrão
function soma1(a,b,c ){
     a = a || 1
     b = b || 1
     c = c || 1
     return a+b+c
}
console.log(soma1(1,3, ))
console.log(soma1(),soma1(0,0,0))// por o 0 ser falso vai ser retornado o valor padrão informado na função

// estrategia 2,3 e 4 para gerar valor padrão

function soma2(a,b,c){
    a = a !== undefined ? a:1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 :c // a mais segura das estrategias
    return a+b+c
}

console.log(soma2(1,2,3),soma2(),soma2(0,0,0))

// valor padrão do es2015

function soma3(a= 1, b= 1, c= 1) {
    return a+b+c
}

console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0),soma3(3,4,5))

function mult(a= 1, b=1, c=1){
    return a*b*c
}
console.log(mult(1,2,3),mult(),mult(2))