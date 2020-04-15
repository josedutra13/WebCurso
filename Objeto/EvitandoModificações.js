// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
}) // com o .preventExtensions, o objeto pode ser modificado, porém não e possivel adicionar novos atributos, excluir e possivel

console.log('Extensivel',Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35} // não e possivel adicionar novos elementos e nem excluir, porém consegue mexer no atributo já existente
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa)
pessoa.idade = 30
console.log(pessoa)

//Object.freeze = selado + valores constantes
