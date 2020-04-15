Array.prototype.filter2 = function (callback){
     const filtrArray = []
     for(let i= 0; i< this.length; i++){
          if(callback(this[i],i,this)){
              filtrArray.push(this[i])
          }
     }
    return filtrArray

}

const produtos = [
    {nome : 'Notebook', preco :2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199,fragil : true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil : true},
    {nome: 'Copo de Plastico', preco : 18.99, fragil : false} 
]

console.log(produtos.filter2(function(p){
   return false
})) // ele vai filtrar apenas os elementos que foram especificados que vai retornar

const frag = p => p.fragil
const precomai = p => p.preco >=500


console.log(produtos.filter2(frag).filter2(precomai))