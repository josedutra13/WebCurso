const pessoa = {
    nome : 'Rebeca',
    idade : 2,
    peso : 13
}


console.log(Object.keys(pessoa))// keys ira pegar todas as chaves
console.log(Object.values(pessoa))//vallues mostra os valores 
console.log(Object.entries(pessoa))// entries mostra os registros

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : true,
    writable : false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = { a:1 }
const o1 = {b :2}
const o2 = { c: 3, a:4}
const obj = Object.assign(dest, o1, o2)// sempre oque vai ficar sobrescrito e o ultimo objeto

Object.freeze(obj)
obj.c = 1234
console.log(obj)