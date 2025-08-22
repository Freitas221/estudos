
/*
const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'text.txt')

fs.writeFile(caminhoArquivo, 'Frase 1 \n', {flag: 'a'}) //<- Adiciona o texto ao arquivo
.then(() => {
    console.log("Arquivo escrito com sucesso")
})
.catch((e) => {
    console.log(new Error(e))
})

--CRIANDO E ADICIONANDO TEXTOS AO ARQUIVO--
*/

//.................................................

/*
const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, '..', 'text.json')

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria Luiza'},
    {nome: 'Leonardo'},
    {nome: 'Lucas'}
]

const json = JSON.stringify(pessoas, '', 2)

fs.writeFile(caminhoArquivo, json)

--CRIANDO E ADICIONANDO ARQUIVO JSON--
*/

//.................................................

const fs = require('fs').promises

module.exports = (caminho, arquivo) =>{
    fs.writeFile(caminho, arquivo, {flag: 'w'})
}