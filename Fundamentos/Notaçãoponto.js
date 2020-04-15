console.log(Math.ceil(6.1))// ceil e o arredondamento pra cima
console.log(Math.floor(5.2))// flor arredonda pra baixo

const obj1 = {}
obj1.nome = 'Gado d+'
// obj1['nome']= 'My di'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome 
    this.exec = function(){
        console.log(' Exec...')
    }
}

const obj2 = new Obj('dougras')
const obj3 = new Obj(' Bla')
console.log(obj2.nome)// pra acessar o atributo dentro da struct
console.log(obj3.nome)
obj3.exec()