function getAle(min , max){
      const valor = Math.random() * (max - min) + min
       return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getAle(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)// jeito de concatenar com `` ${}

}while(opcao != -1)

console.log('flw')