function Pessoa(){
   this.idade = 0
   
   const self = this
   setInterval(function(){
       this.idade++
       console.log(this.idade)
   }/*.bind(this)*/,1000)// dispara uma outra função apartir do intervalo que foi definido na função , para ser executado a uma quantidade de milisegundos
}

new Pessoa// instância criada da função 