console.log(module.exports)
console.log(module.exports === this)// this e uma referência ao module exports
console.log(module.exports === exports)

this.a = 1
exports.b = 2// o this e o exports, são apenas 2 referências para o msm objeto que module exports aponta
module.exports.c = 3

exports = null
console.log(module.exports)// todos serão visiveis para importação porém oque realmente será importado será o que tem module exports, ele e o unico que será retornado

exports = {
    nome: 'Teste'
}

console.log(module.exports)// o melhor a ser usado para exportação e o module.exports
module.exports = {
    publico: true
}