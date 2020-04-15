class Avo{
    constructor(sobrenome){
          this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome,profissao = 'Professor'){
        super(sobrenome)// super e usado para chamar a constructor de avo que pai está extendendo
         this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)