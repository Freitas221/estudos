/* 1° CASO

module.exports = (x, y) => x * y - Essa função não é criada para ser usada dentro do próprio módulo.
*/

//......................................

/* 2° CASO

module.exports = class Animal {
    constructor(nome) {
        this.nome = nome
    }

    alimentar() {
        console.log(`${this.nome} gosta de comer.`)
    }
}
*/

//......................................


