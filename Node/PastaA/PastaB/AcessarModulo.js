const moduloA = require('../../moduloA')// a notação .. e capaz de fazer um caminho , até chegar na pasta desejada
console.log(moduloA.bemVindo)

const c = require('./PastaC/index')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req,res) =>{
      res.write('Bom dia >: ')
      res.end()
}).listen(8080) 
*/
