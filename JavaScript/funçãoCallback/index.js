    function saudacao(nome) {
    console.log('Olá, ' + nome);
}

function processarEntradaUsuario(callback) {
    var nome = window.prompt('Por favor, insira seu nome.');
    callback(nome); // A função de callback é chamada aqui
}

processarEntradaUsuario(saudacao);

// function f1(callback){
//     console.log("Marcos")
//     if(callback) callback();
// }

// function f2(callback){
//     console.log("Freitas")
//     if(callback) callback();
// }

// function f3(callback){
//     console.log("Rocha")
//     if(callback) callback();
// }

// f1(function(){
//     f2(function(){
//         f3()
//     })
// })