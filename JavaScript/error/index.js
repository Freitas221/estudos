
function number(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('O erro precisa ser tratado')
    }
    return x + y;
}
try{
    console.log(number('s', 2))
    console.log(number(1, 2))
}catch(e){
    console.log(e.message)
}

