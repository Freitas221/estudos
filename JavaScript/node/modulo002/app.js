/* 1° CASO

const multiplicação = require('./mod1')

console.log(multiplicação(10, 10))
*/

//..................................

/* 2° CASO

const Animal = require('./mod1')

const a1 = new Animal('Tobey')
a1.alimentar()
*/

//..................................

/* DIRNAME e FILENAME

console.log(__filename) - Retorna o caminho completo com o nome do arquivo atual.

console.log(__dirname) - Retorna apenas o diretório (pasta) onde o arquivo atual está.
*/

/* MANIPULANDO CAMINHOS

const path = require('path')
console.log(__dirname)
console.log(path.resolve(__dirname, '.', '.', 'imagens', 'foto.png'))
*/

//..................................

