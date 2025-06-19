import 'core-js/stable' // Para navegadores antigos que não reconhecem algum comando moderno.
import "regenerator-runtime/runtime" // Caso os navegadores antigos acusem o erro regeneratorRuntime.

import './assets/css/style.css'


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

console.log('Mensagem anônima') 