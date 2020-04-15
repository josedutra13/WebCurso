//Função em JS e First-Class Object(Citizens)

//criar de forma literal
function fun1(){}


//Armazenar em uma variável
const bla = function (){}


// Armazenar em um array
const array = [function(a,b){return a+b},fun1,bla]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
    obj.falar = function(){ return 'bah'}
    console.log(obj.falar())


// Passar função por parametro
function run(fun){
    fun()
}

run(function(){console.log('Exec...')})

// Um Função pode retornar/ conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(5)
const cincoMais = soma(2,3)
cincoMais(5)