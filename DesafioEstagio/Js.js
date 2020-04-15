// Valida nome
var notef = document.getElementsByClassName('formulario__input')
for(var i=0; i<notef.length; i++){  
  notef[i].addEventListener('keyup',function(){
    if(this.value.length>=1){
      this.nextElementSibling.classList.add('definir')
    }else{
      this.nextElementSibling.classList.remove('definir')
    }
  })
}


document.getElementsByName("formulario").onclick = function rad(e){
   var vradio = document.getElementsByName("formulario")
   var chec = document.getElementsByName("formcheck")
   let vchec = []
   
   for(let i= 0; i<vradio.length; i++){
     if(vradio[i] === vradio[0]){
          
     }if(vradio[i] === vradio[1]){
        e.preventDefault()
     }
   }
   for(let j=0; j<chec.length; j++){
    vchec[j] = j++
 }

}



function validar(){
  var nome = document.getElementById("Vnome").value
  
  var padrao = /[^a-zà-ú]/gi
   
  var erro = 'Digite um nome valido'
  var valida_nome = nome.match(padrao)
  
  if(valida_nome || !nome){
     alert(erro)
  }else{
     console.log('ok')
  }
}

function vtelefone(){
      
    var telefone = document.getElementById("Vtelefone").value
    var regex = new RegExp('^\\(((1[1-9])|([2-9][0-9]))\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$')
    
    if (regex.test(telefone)){
        console.log("Valido")
    }else alert('Digite um numero valido')
 
}