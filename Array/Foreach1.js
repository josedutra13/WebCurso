const aprovados = ['Ana','Ala','Bla','Damm']
aprovados.forEach(function(nome,indice){// a função callback no foreach recebe 3 parametros
    console.log(`${indice+1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
//aprovados.forEach((nome,indice) => console.log(`${indice+1}) ${nome}`))

const exibirApro = aprovado => console.log(aprovado)
aprovados.forEach(exibirApro)