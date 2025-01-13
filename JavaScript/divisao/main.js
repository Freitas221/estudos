var num1 = window.document.querySelector("#numero1")
var resultado = window.document.querySelector("#resultado")


function calcular(){
    
    const result = num1.value % 3 
    const result2 = num1.value % 5

    if(result && result2 === 0){
        resultado.innerHTML = "FizzBuzz"
    }
    if(result === 0){
        resultado.innerHTML = "Fizz"
    }
    if(result2 === 0){
        resultado.innerHTML = "Buzz"
    }
}
