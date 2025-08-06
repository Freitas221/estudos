/* 1° CASO

const nome = 'Luiz'
const sobrenome = 'Miranda'

const falaNome = () => {
    return nome + ' '+ sobrenome
}

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
*/

//......................................

/* 2° CASO

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

exports.Pessoa = Pessoa
*/

//......................................

/* 3° CASO

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}
const nome = 'Marcos'
const sobrenome = 'Freitas'

module.exports = {
    nome, sobrenome, Pessoa
}
*/
