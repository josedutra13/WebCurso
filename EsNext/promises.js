

function falarDepoisDe(segundos,frase){
    return new Promise((resolve,reject) => {
         setTimeout(() => {
             resolve(frase)// a promise só aceita um unico parâmetro . O resolve aceita apenas um unico parâmetro
         }, segundos * 1000)    
    })
}

falarDepoisDe(3, 'Cool')
     .then(frase => frase.concat('?!?'))
     .then(outraFrase => console.log('Blablabla',outraFrase))
     .catch(e => console.log(e))