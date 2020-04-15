Array.prototype.forEach2 = function(callback){
     for (let i = 0; i < this.length; i++){ // o length e o tamanho do vetor
         callback(this[i],i,this) 
        }
    }

    const aprovados = ['Ana','Ala','Bla','Damm']
    aprovados.forEach2(function(nome,indice){
         console.log(`${indice+1}) ${nome}`) 
        })