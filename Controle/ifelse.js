const imprimirResult =  function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResult(2)
imprimirResult(8)
imprimirResult('koe')// cuidado !!
