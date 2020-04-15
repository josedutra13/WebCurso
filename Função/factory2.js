function criarProduto(nome,preco){
     return {
         nome ,
         preco ,
         descontos: 0.1
     }
}

console.log(criarProduto('Not',2000.2))
console.log(criarProduto('Iphone',1992.92))