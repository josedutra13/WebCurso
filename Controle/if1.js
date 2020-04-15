function soBoaNoticia(nota){
if(nota >=7){
    console.log('Parabéns')
} if(nota<7){
     console.log('Estude mais');
}

}

soBoaNoticia(9)
soBoaNoticia(5)

function seForVerdadeEuFalo(valor){
   if(valor){
       console.log('E vdd... ' + valor)
   }
}

seForVerdadeEuFalo(true)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,3])
seForVerdadeEuFalo({})