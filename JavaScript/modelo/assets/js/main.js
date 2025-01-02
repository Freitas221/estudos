var button = document.getElementById('botao')
button.addEventListener('mouseenter', entrar)
button.addEventListener('mouseout', sair)

function entrar(){
    button.style.backgroundColor = 'red'
}

function sair(){
    button.style.backgroundColor = 'rgb(116, 116, 238)'
}

