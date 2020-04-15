const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')// stdout e a saida padrão
    process.exit()
}else{
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data',data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!\n`)// o ! quando adicionado na frente da variavel chamada no template string, substitui uma letra do que está antes da invocação
        process.exit()
    })// stdin e a entrada padrão, o evento on data vai aocntecer quando e digitado alguma coisa , é e pressionado o enter
}


