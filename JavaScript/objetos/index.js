// MANEIRAS DE SE CRIAR UM OBJETO 

// const pessoa = {
    // nome: 'Marcos',
    // idade: 25, 
 // sobrenome: 'Freitas'
// }

// console.log (pessoa.sobrenome)

// ------------------------------------

// function criaPessoa (nome, sobrenome, idade){
//     return{
//         nome, sobrenome, idade
//     }
// }

// let pessoa = criaPessoa('Marcos', 'Freitas', 21)

// const{nome, sobrenome, idade} = pessoa

// console.log(nome, sobrenome, idade)

// ------------------------------------

// const pessoa1 = new Object()

// pessoa1.nome = 'Luiz'
// pessoa1.sobrenome = 'Otavio'
// pessoa1.idade = 30

// pessoa1.falaNome = function() {
//     return (`${this.nome} está falando seu nome`)
// }

// pessoa1.DataDeNascimento = (function(){
//     const dataAtual = new Date().getFullYear()
//     return dataAtual - this.idade
// })

// console.log(pessoa1.DataDeNascimento())

// ------------------------------------

// DEFINEPROPERTY - DEFINEPROPERTIES (Congelando o objeto)

// function Produto(nome, preco, estoque) {

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // -> Mostra a chave
//         value: estoque, // -> Faz com que meu estoque seja exibido
//         writable: false, // -> O valor não pode ser alterado
//         configurable: false // -> A variável não pode ser deletada e nem reconfigurada
//     })

//     Object.defineProperties(this, {
//         nome: {
//             enumerable: true,
//             value: nome, 
//             writable: true, 
//             configurable: true
//         },
//         preco: {
//             enumerable: true,
//             value: preco, 
//             writable: true, 
//             configurable: true
//         }
// }) //-> Em vez de uma propriedade, posso configurar várias. Mas caso utilize esse método, preciso excluir o this.nome e o this.preco instanciados no começo.
// }

// const p1 = new Produto('Camiseta', 20, 3)

// const{nome, preco, estoque} = p1

// console.log(nome, preco, estoque)


// ------------------------------------

// GETTERS E SETTERS

// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // -> Mostra a chave
//         configurable: false, // -> A variável não pode ser deletada e nem reconfigurada
//         get: function(){
//             return estoque
//         },
//         set: function(estoqueV){
//             if(typeof estoqueV !== 'number'){
//                 throw new TypeError('Valor incorreto')
//             }
//             estoque = estoqueV
//         }
//     })
// }

// const p1 = new Produto('Camiseta', 20, 3)
// p1.estoque = 500

// const{nome, preco, estoque} = p1

// console.log(nome, preco, estoque)

// ------------------------------------

// GETTERS E SETTERS (FACTORY FUNCTION)

// function criaProduto(nome) {
//     return {
//         get nome(){
//             return nome
//         },

//         set nome(valor){
//             nome = valor
//         }
//     }
// }

// const p2 = criaProduto('Camiseta')

// const{nome} = p2

// console.log(nome)

// ------------------------------------

//MÉTODOS ÚTEIS PARA OBJETOS

// (...spread)

// const produto = {nome: 'Caneca', preco: 1.8}

// const produto2 = {
//     ...produto, material: 'porcelana'
// } // -> Recebe uma cópia de produto e pode adicionar mais chaves.

// produto2.nome = 'Xícara'
// produto2.preco = 2.5

// const{nome, preco, material} = produto2

// console.log(nome, preco, material)

// ------------------------------------

// // Object.getOwnPropertyDescriptor()

// const produto = {nome: 'Caneca', preco: 1.8}

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) // -> Descreve o tipo do objeto.

// ------------------------------------

// Object.values()

// const produto = {nome: 'Caneca', preco: 1.8}.

// console.log(Object.values(produto))

// ------------------------------------

// PROTOTYPES

// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// Pessoa.prototype.f

// const pessoa1 = new Pessoa('Luiz', 'O.')
// const pessoa2 = new Pessoa('Luiz', 'O.')

// console.dir(pessoa1)
// console.dir(pessoa2)
