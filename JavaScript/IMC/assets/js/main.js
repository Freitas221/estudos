var button = document.getElementById('botao')
button.addEventListener('mouseenter', entrar)
button.addEventListener('mouseout', sair)
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var res = document.getElementById('res')

window.alert('Os valores precisam ser separados por ","')

function calculation(){

    if(altura.value == 0){
        alert("Altura inválida")
    }
    if(peso.value == 0){
        alert("Peso inválido")
    }

    var result = peso.value/(altura.value * altura.value)

    if(result < 18.5){
        res.innerHTML = `Abaixo do peso`
    }else if(result < 24.9){
        res.innerHTML = `Peso normal`
    }else if(result < 29.9){
        res.innerHTML = `Sobrepeso`
    }else if(result < 34.9){
        res.innerHTML = `Obesidade grau 1`
    }else if(result < 39.9){
        res.innerHTML = `Obesidade grau 2`
    }else{
        res.innerHTML = `Obesidade grau 3`
    }
}
function entrar(){
    button.style.backgroundColor = 'red'
}

function sair(){
    button.style.backgroundColor = 'rgb(116, 116, 238)'
}
 