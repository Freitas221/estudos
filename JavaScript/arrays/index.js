//DECLARAÇÃO DE UM ARRAY

// const alunos = ['Luis', 'Marcos', 'Alexia', 'Walace', 'Rosana']

// delete alunos[2] - Deleta o conteúdo sem deletar a posição.

// alunos.pop() - Deleta o conteúdo e a posição.

// alunos.shift() - Deleta a primeira posição e realoca as posições dos elementos.

// alunos.push('') - Adiciona um elemento no final de um Array.

// alunos.unshift('') - Adiciona um elemento no começo de um Array e realoca as posições dos elementos.

// .splice(posição, quantos elementos, adiciona elementos)

// alunos.splice(4, 1) - '4' Remove o quarto elemento. '1' Remove um elemento.

// alunos.splice(3, 0, 'Luiz') - Adiciona um elemento na posição 3 e realoca o resto.

// alunos.splice(alunos.length, 0, 'Luiz') - Adiciona um elemento ao final do Array.



// for(const valor of alunos){
//     console.log(valor)
// }

// ------------------------------------

// FATIANDO MEU ARRAY

// const novo = alunos.slice(0, -3)

// for(const valor of novo){
//     console.log(valor)
// }

// ------------------------------------

//COPIANDO UM ARRAY PARA DENTRO DE OUTRO

// const novo = [...alunos]

// ------------------------------------

//TAMANHO DO ARRAY

// console.log(alunos.length)

// ------------------------------------

// CONCATENANDO ARRAYS

// const a1 = [1, 2, 3]
// const a2 = [4, 5, 6]

// // 1 Forma
// // const a3 = a1.concat(a2, [7, 8, 9], 'Luis')

// //2 Forma
// // const a3 = [...a1, 'Luis', ...a2, ...[7, 8, 9]]

// console.log(a3)

// ------------------------------------

// FILTRANDO VALORES

// const num = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numFilter = num.filter(valor => valor > 10)

// console.log(numFilter)

// ------------------------------------
 
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a 

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Walace', idade: 47}
// ]

// const pessoasQuant = pessoas.filter(valor => valor.nome.length >= 5)

// const pessoasValueOf = pessoas.filter(valor => valor.nome.charAt(0) === 'L')

// console.log(pessoasValueOf)

// ------------------------------------

// USANDO A FUNÇÃO MAP

// const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const dobro = number.map(valor => valor * 2 )
 
// console.log(dobro)

// ------------------------------------

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Walace', idade: 47}
// ]

// const nomes = pessoas.map(valor => valor.nome);

// const pessoasDel = pessoas.map((valor) =>{
//     delete valor.nome
//     return valor
// })
// console.log(pessoasDel)

// const pessoasId = pessoas.map((valor, indice) => {
//     valor.id = indice
//     return valor
// })
// console.log(pessoasId)

// ------------------------------------

// Quando utilizamos o map no pessaosId mexemos no conteúdo do Array, caso não queire
// alterar o valor original, faça: 


// const pessoasId = pessoas.map((valor, indice) => {
//     const newObj = {...valor}
//     newObj.id = indice
//     return newObj
// })
// console.log(pessoasId)

// ------------------------------------

//USANDO A FUNÇÃO REDUCE

// const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

 // SOMA DOS VALORES
 // const total = number.reduce((acumulador, valor, indice, array) => {
 //     acumulador += valor;
 //     return acumulador
 // }, 0)

 // console.log(total)


// const total = number.filter(valor => valor % 2 === 0)

// console.log(total)


// RETORNE UMA PESSOA MAIS VELHA

// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Letícia', idade: 19},
//     {nome: 'Rosana', idade: 75},
//     {nome: 'Walace', idade: 47}
// ]

// const pessoaV = pessoas.reduce((acumulador, valor) =>{
//     if(acumulador.idade > valor.idade) return acumulador
//     return valor
// })

// console.log(pessoaV)

// ------------------------------------

//RETORNE A SOMA DO DOBRO DE TODOS OS VALORES

// -> Filtrar pares

// -> Dobrar os valores

// -> Reduzir (somar tudo)

// const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const numeroPares = number
// .filter(valor => valor % 2 === 0)
// .map(valor => valor * 2)
// .reduce((acumulador, valor) => acumulador + valor)

// console.log(numeroPares)

// ------------------------------------

// FOR EACH SÓ FUNCIONA PARA ARRAYS

// const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // for(let valor of a1){
// //     console.log(valor)
// // }

// a1.forEach((valor, indice, array) =>{
//     console.log(valor)
// })

// a1.forEach((valor => console.log(valor)))

// ------------------------------------

function validadorCpf(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, 
        get: function(){
            return cpfLimpo = cpf.replace(/\D+/g, '')
        }
    })

}

validadorCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.lenght !== 11) return false

    return true
}

validadorCpf.prototype.criaDigito = function(cpfParcial){
    
}

const cpf = new validadorCpf('705.484.450-52')
console.log(cpf.valida())
console.log()