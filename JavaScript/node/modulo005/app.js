const write = require('./modules/write')
const path = require('path')
caminhoArquivo = path.resolve(__dirname, 'text.JSON')
const read = require('./modules/read') 

// const pessoas = [
//     {nome: "Marcos Freitas"},
//     {nome: "Lucas Oliveira"},
//     {nome: "Emanuel da Silva"}
// ]

// const json = JSON.stringify(pessoas, "", 2)
// write(caminhoArquivo, json)

async function readFile(caminho) {
    const dados = await read(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}

readFile(caminhoArquivo)
