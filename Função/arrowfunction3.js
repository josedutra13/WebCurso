let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = paran => console.log(this === paran)
comparaComThisArrow(global)// não e global no caso de uma arrow function
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// a arrow function não muda com o bind, o this só vai apontar pra função que foi escrita
comparaComThisArrow(module.exports)