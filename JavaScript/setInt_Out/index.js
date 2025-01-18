function mostrahora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    })
}

const timer = setInterval(function(){
    console.log(mostrahora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 10000)