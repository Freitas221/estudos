/*MANEIRAS DE DECLARAR UMA FUNÇÃO :

const souUmDado = function(){
    console.log('Sou um dado')
}
souUmDado();

------------------------------------

function executaUmaFuncao(funcao){
    funcao()
}
executaUmaFuncao(souUmDado)

------------------------------------

const ArrowFunction = () =>{
    console.log("Marcos Lindo")
}
ArrowFunction();
------------------------------------

const obj = {
    pessoa(funcao){
        funcao()
    }
}
obj.pessoa(ArrowFunction);

------------------------------------

PARÂMETROS DA FUNÇÃO : 

function funcao(){
    let total = 0

    for(let argumento of arguments){
        total += argumento
    }                                    
    console.log(`Total: ${total}`)
}
funcao( 1, 2, 3, 4, 5);

------------------------------------

ATRIBUIÇÃO VIA DESESTRUTURAÇÃO EM FUNCTION

function funcao(nome, sobrenome, idade){
   return {nome, sobrenome, idade};
}

const p1 = funcao('Marcos', 'Freitas', 21);

console.log(p1)

------------------------------------
 
function funcao(nome, sobrenome, idade){
    console.log(nome, sobrenome, idade)
}

const p1 = funcao('Marcos', 'Freitas', 21)

------------------------------------
  
RESTO DA FUNÇÃO

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('+   ', 0, 10, 20, 30, 40, 50)

------------------------------------

UMA FUNÇÃO DENTRO DA OUTRA (MELHOR USAR CALLBACK)

function falaOla(ola){
     return function(mundo){
        return ola + ' '+ mundo
    }
}

const falaO = falaOla('Olá')
const falaM = falaO('mundo')
console.log(falaM)

------------------------------------

FUNÇÕES IMEDIATAS

(function(){

    let sobrenome = 'Freitas'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log (criaNome('Marcos'))
    }

    falaNome()

})()

------------------------------------

FUNÇÃO FÁBRICA (FACTORY FUNCTION)

function criaNome(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        fala(assunto){
            return `${nome} está falando ${assunto}`
        },
        altura,
        peso,

        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaNome('Marcos', 'Freitas', 1.8, 81) b
console.log(p1.nomeCompleto())


------------------------------------

CONSTRUCTOR FUNCTION

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.cumprimentar = function() {
    console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
};

const pessoa = new Pessoa("Carlos", 25);
pessoa.cumprimentar(); 

const pessoa2 = new Pessoa("Luiza", 27);
pessoa2.cumprimentar()

------------------------------------

OBJECT.SETPROTOTYPEOF()

const A = {
    chaveA: 'A',
    falaOi(){
        return "Olá mundo"
    }
}

const B = {
    chaveB: 'B'
}

Object.setPrototypeOf(B, A)

console.log(B.falaOi())


------------------------------------

Especialização de classes (Herança) - Mesma coisa de JAVA, Produto seria uma super Classe e Camiseta, caneca seria uma subclasse herdando nome, preço e métodos, mas podendo também ter seus próprios objetos.

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, estoque, {

        enumerable: true,
        configurable: false,

        get: function(){
            return estoque
        },

        set: function(valor) {
            estoque = valor
        }

    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'porcelana', 5)


------------------------------------

UTILIZANDO AGORA CLASSES

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aumento(quantia) {
        this.preco += quantia;
    }

    desconto(quantia) {
        this.preco -= quantia;
    }
}

class Camiseta extends Produto {
    constructor(nome, preco, cor) {
        super(nome, preco);
        this.cor = cor;
    }
}

class Caneca extends Produto {
    constructor(nome, preco, material, estoque) {
        super(nome, preco);
        this.material = material;
        let _estoque = estoque; // Variável privada para controlar o estoque

        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function () {
                return _estoque;
            },
            set: function (valor) {
                if (typeof valor !== 'number' || valor < 0) {
                    throw new Error('Estoque deve ser um número válido e maior ou igual a zero.');
                }
                _estoque = valor;
            }
        });
    }
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Porcelana', 5);

console.log(camiseta);
console.log(caneca);


caneca.estoque = 10;
console.log(caneca.estoque); // 10


------------------------------------


DEFINEPROPERTY - DEFINEPROPERTIES (Congelando o objeto)

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // -> Mostra a chave
        value: estoque, // -> Faz com que meu estoque seja exibido
        writable: false, // -> O valor não pode ser alterado
        configurable: false // -> A variável não pode ser deletada e nem reconfigurada
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome, 
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable: true
        }
    }) -> Em vez de uma propriedade, posso configurar várias. Mas caso utilize esse método, preciso excluir o this.nome e o this.preco instanciados no começo.
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)

------------------------------------

FUNÇÃO RECURSIVA

function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max)
    recursiva(max)    
}

recursiva(-10);

------------------------------------

FUNÇÃO GERADORA

function* geradora1(valor){
    yield valor + 5
    yield valor - 5
    yield valor / 2
}

FORMA PAUSADA
const g1 = geradora1(10)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

FORMA AUTOMATIZADA
const g1 = geradora1(10)
for(let valor of g1){
    console.log(valor)
}

EXEMPLO 2
function* geradora2(){
   let i = 0
   
   while(true) {
    yield i;
    i++
   }
} 

const g2 = geradora2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

EXEMPLO 3

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3();
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()

for(let valor of g4){
    console.log(valor)
}

EXEMPLO 3

function* geradora5(){
    yield function(){
        console.log('Vim do y1')
    }

    // ...
 
        console.log('Vim do y2')
    }

}

const g5 = geradora5();

const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()

------------------------------------*/