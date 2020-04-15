function tratarErro(erro){
   // throw new Error('...')
   //throw 10
   //throw true 
   //throw 'msg'
   throw {
       nome : erro.name,
       msg: erro.message,
       date : new Date
   }
}

function imprimirNomeGritado(){
try{
    console.log(obj.name.toUpperCase()+ '!!!')

}catch(e){
    tratarErro(e)
}
finally{
    console.log('Fim')// sempre será executado
}
}

const obj = { nome : 'Roberto'}
imprimirNomeGritado(obj)
