// middleware pattern (chain of responsability)

const passo1 = (ctx,next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx,next) =>{
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'md3'

const exec = (ctx, ...middlewares) => {
      const execPasso = indice => {
          middlewares && indice < middlewares.length &&
               middlewares[indice](ctx, () => execPasso(indice+1))// a função e chamada dentro dela msm

      }
      execPasso(0)
}// o operador rest (...)  vai juntar varias funções dentro de uma constante

const ctx = {}
exec (ctx,passo1,passo2,passo3)
console.log(ctx)