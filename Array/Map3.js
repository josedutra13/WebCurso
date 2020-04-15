Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i< this.length; i++){//this.length e referente ao array original
        newArray.push(callback(this[i],i,this))

    }
    return newArray
}


const carrinho = [
    '{"nome":"Borracha", "preco" : 3.45}',
    '{"nome": "Caderno", "preco" : 13.90}',
    '{"nome": "Kit de Lapis", "preco" : 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)// parse transforma um JSON em um objeto
const precoapenas = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(precoapenas)
console.log(resultado)


// USAR SEMPRE QUE PRECISAR TRANSFORMAR UM ARRAY EM OUTRO
//UTILIZAR O MAP
