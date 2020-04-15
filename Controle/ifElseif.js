Number.prototype.entre = function(inicio , fim){
      return this >= inicio && this <= fim

}

const imprimirResult = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if(nota.entre(6.75,7)){
        console.log('Raspando')
    }else if(nota.entre(0,6)){
        console.log('Reprovado')
    }else{
        console.log('Nota invalida')
    }
     console.log('The ENd')
}


imprimirResult(10)
imprimirResult(5)
imprimirResult(7)
imprimirResult(6.75)
imprimirResult(-2)