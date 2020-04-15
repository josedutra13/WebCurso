const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)// está acessando o objeto no qual a função está inserida
    }
}

pessoa.falar()
const falar = pessoa.falar // o = serve pra armazenar algo na função, ou até msm em variaveis
falar()// conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)// o bind passa um objeto que vc quer que seja resolvido no this, pra puxar o this do objeto pessoa bind(pessoa)
falarDePessoa()