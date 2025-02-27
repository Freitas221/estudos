/*
function criaPessoa(nome, sobrenome) {
    const pessoaProtoytpe = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },

        comer() {
            console.log(`${this.nome} está comendo.`)
        },

        beber() {
            console.log(`${this.nome} está bebendo.`)
        }
    }

        return Object.create(pessoaProtoytpe, {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        })
}

const p1 = criaPessoa('Luiz', 'Otavio')

DESSA FORMA ESTOU ACOPLANDO OS MÉTODOS NO MEU PROTO, FAZENDO COM QUE INSTÂNCIAS DO TIPO criaPessoa REUTILIZE OS MÉTODOS
*/


// ------------------------------------

/*
const falar = {
    falar(){
        console.log(`${this.nome} está falando.`)
    }
}

const comer = {
    falar(){
        console.log(`${this.nome} está comendo.`)
    }
}

const beber = {
    falar(){
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoaProtoytpe = {...falar, ...comer, ...beber}


function criaPessoa(nome, sobrenome) {
        return Object.create(pessoaProtoytpe, {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        })
}

DESSA FORMA EU POSSO ACOPLAR OS OBJETOS falar, comer e beber NO PROTO DE QUALQUER TIPO DE FUNCTION QUE EU CRIAR, DESSA FORMA NÃO FICAM RESTRITOS APENAS A INSTÂNCIAS DE criaPessoa.
*/

// ------------------------------------
