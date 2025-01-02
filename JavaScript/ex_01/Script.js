function Registro(){
    let nome = document.getElementById('Nome');
    let sobrenome = document.getElementById('Sobrenome')
    let peso = document.getElementById('Peso')
    let altura = document.getElementById('Altura')
    let result = document.getElementById('Result')
    let vect = [nome.value, sobrenome.value, peso.value, altura.value,]

    result.innerHTML = "Nome: "+ vect[0]+" Sobrenome: "+vect[1]+" Peso: "+vect[2] + " Altura" + vect[3]    
}