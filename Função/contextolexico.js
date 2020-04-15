const valor = 'Global'

minhaFuncao = _ => console.log(valor)
function exec () { 
    const valor = 'local' 
     minhaFuncao()
}

exec()