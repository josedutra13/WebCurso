const fabricantes = ['Mercedes','Audi','BW']

function imprimir(nome, indice){
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)// forEach e uma função que  e encontrada dentro do array
fabricantes.forEach(a=> console.log(a))