/*
const fs = require('fs')

const path = require('path')

const caminho = path.resolve(__dirname, '..', '..', '..', 'atualPasta', 'test.txt')

fs.readFile(caminho, 'utf8', (error, caminho) => {
    if(error) return console.log("Erro ao ler o arquivo", error)
    console.log(caminho);
})

-- LER O CONTEÚDO DOS ARQUIVOS --
*/

//---------------------------------------------------------------------


/*
const fs = require('fs')
const path = require('path')
const caminho = path.resolve(__dirname, '..', '..', '..', 'atualPasta', 'test.txt')

const nvConteudo = 'PRAZER SOU MARCOS\n'

fs.appendFile(caminho, nvConteudo, (error) => {
    if(error) return ("ERRO AO ADCIONAR O CONTEÚDO", error)
    console.log("CONTEÚDO ADICIONADO")
})

fs.readFile(caminho, 'utf8', (error, caminho) => {
    if(error) return console.log("Erro ao ler o arquivo", error)
    console.log(caminho);
})

-- LER E ADCIONA CONTEÚDO AO ARQUIVO --
*/

//---------------------------------------------------------------------


/*
const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files)
} 

function walk(files) {
    for(let file of files) {
        console.log(file)
    }
}

readdir('C:/Users/marco/OneDrive/Documentos/Estudos/html.css/Exercicios/flexBox')

-- LER OS DIRETÓRIOS CONTIDOS DENTRO DE flexBox --
*/

//---------------------------------------------------------------------

/*
const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
} 

async function walk(files, rootDir) {
    for(let file of files) {
        const filesFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(filesFullPath)
        console.log(file, stats.isDirectory())
    }
}

readdir('C:/Users/marco/OneDrive/Documentos/Estudos/html.css/Exercicios/flexBox')

-- CHECA SE AS PASTAS CONTIDAS EM flexBox SÃO DIRETÓRIOS OU NÃO --
*/

//---------------------------------------------------------------------

/*
const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(rootDir, files)
} 

async function walk(rootDir, files) {
    for(let file of files) {
        const filesFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(filesFullPath)

        if(/\.git/g.test(filesFullPath)) continue // <- Pula todos os arquivos git

        if(stats.isDirectory()){
           await readdir(filesFullPath)
            continue;
        } 

        if(!/\.css$/g.test(filesFullPath)) continue // <- Mostra tudo que for .css.

        console.log(filesFullPath)
    }
}

readdir('C:/Users/marco/OneDrive/Documentos/Estudos/html.css/Exercicios/flexBox')

-- FAZ CHECAGEM DOS ARQUIVOS COM PARÂMETRO ESTABELECIDOS --
*/

//---------------------------------------------------------------------
