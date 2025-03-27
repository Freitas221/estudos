function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max- min) + min)
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){
            reject(new Error('BAD VALUE'))
            return;
        }

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}


espera("Conexão com o Banco de Dados", rand(1,3)).then(async (reposta)=>{
    console.log(reposta)
    const resposta_2 = await espera("Processando dados", rand(1,3))
    console.log(resposta_2)
    const resposta_3 = await espera(111111, rand(1,3))
    console.log(resposta_3)
}).catch((e) => {
    console.log(e)
})

console.log('Mensagem anônima') //-> Essa mensagem será exibida antes do promise pois o JS não espera os dados ficarem prontos para executar o resto do código


//----------------------------------------

/* 2° FORMA DE FAZER

async function executa() {
   try{
    const reposta_1 = await espera("Conexão com o Banco de Dados", rand(1,3))
    console.log(reposta_1)

    const reposta_2 = await espera("Processando dados", rand(1,3))
    console.log(reposta_2)

    const reposta_3 = await espera(111111, rand(1,3))
    console.log(reposta_3)
   } catch(e => {
    console.log(e)
   })
}
executa()

console.log('Mensagem anônima') -> Essa mensagem será exibida antes do promise pois o JS não espera os dados ficarem prontos para executar o resto do código.

*/

//----------------------------------------

/* PROMISE.ALL -> Resolve todas as minhas promises (SOMENTE COM ARRAYS)

const promises = [
    'Primeiro valor',
    espera('Promise 1', 3000),
    espera('Promise 2', 500),
    espera('Promise 3', 1000),
    'Outro valor'
]

Promise.all(promises).then((valor) => {
    console.log(valor)
}).catch((error) => {
    console.log(error)
})

*/

//----------------------------------------

/* PROMISE.RACE -> Retorna a primeira promise resolvida ou o valor que em tese já está resolvido.

const promises = [
    'Primeiro valor',
    espera('Promise 1', rand(1, 3)),
    espera('Promise 2', rand(1, 3)),
    espera('Promise 3', rand(1, 3)),
    'Outro valor'
]

Promise.race(promises).then((valor) => {
    console.log(valor)
}).catch((error) => {
    console.log(error)
})

*/

//----------------------------------------

/* PROMISE.RESOLVE -> Usada para resolver uma promise de cara.

function baixaPagina() {
    const emCache = false
    if(emCache) {
        return Promise.resolve('Página em cache')
    }else {
        return espera('Baixei a Página', rand(1, 5))
    }
}

baixaPagina().then(dadosPaginas => {
    console.log(dadosPaginas)
}).catch(e => console.log(e))

*/