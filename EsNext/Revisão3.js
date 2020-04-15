// ES8: Object.values/Object.entries
const obj = { a:1 , b:2, c:3 }
console.log(Object.values(obj)) // vai dar os valores dos atributos do objeto
console.log(Object.entries(obj)) // mostra a chave e o valor

// Melhorias na Notação Literal
const nome = ' Carla'
const pessoa = {
    nome,
    ola(){
        
        return 'hello bit'
        
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {
    sas(){
        return 'ssss'
    }
}
class Cachorro extends Animal{
    falar(){
        return 'Zas'
    }
}

console.log(new Cachorro().falar(), new Cachorro().sas())