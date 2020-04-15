const produtos = [
    {nome : 'Notebook', preco :2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199,fragil : true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil : true},
    {nome: 'Copo de Plastico', preco : 18.99, fragil : false} 
]

console.log(produtos.filter(function(p){
   return false
})) // ele vai filtrar apenas os elementos que foram especificados que vai retornar

const frag = p => p.fragil
const precomai = p => p.preco >=500


console.log(produtos.filter(frag).filter(precomai))