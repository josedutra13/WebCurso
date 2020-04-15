const fs = require('fs')// file system , um modulo que já vem externo no node


const caminho = __dirname + '/arquivo.json'

//sincrono ....
const conteudo = fs.readFileSync(caminho, 'utf-8')// vai ler o arquivo de uma forma sincrona 
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err,conteudo) => {
    const config = JSON.parse(conteudo)// transformando em um objeto 
    console.log(`${config.db.host}: ${config.db.port}`)

})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteudo da pasta')
    console.log(arquivos)
})// lendo arquivos de toda pasta node
