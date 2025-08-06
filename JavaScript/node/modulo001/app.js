// 1° CASO

/* 1° forma
const mod1 = require('./mod')
console.log(mod1.falaNome())
*/

/* 2° forma
const {nome, sobrenome, falaNome} = require('./mod001')
console.log(falaNome())
*/

/* 3° forma
const falaNome = require('./mo').falaNome
console.log(falaNome())
*/

// ............................................. 

/* 2° CASO

const { Pessoa } = require('./mod')

const p1 = new Pessoa('Marcos', 'Freitas')

console.log(p1.nome, p1.sobrenome)
*/

// ............................................. 

/* 3° CASO

const{ Pessoa, nome, sobrenome } = require('./mod')

const mod1 = new Pessoa('Marcos')
console.log(`${mod1.nome} ${sobrenome}`)
*/
