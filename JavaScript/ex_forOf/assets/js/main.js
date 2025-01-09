
let paragrafos = document.querySelector('.paragrafos')
let ps = paragrafos.querySelectorAll('p')
let corH1 = document.querySelector('#container')
corH1.style.color = 'rgb(255, 255, 255)'

const estilosBody = getComputedStyle (document.body)
const background = estilosBody.backgroundColor

for(let p of ps){ 
    p.style.backgroundColor = 'rgb(17, 86, 102)';
    p.style.color = 'rgb(255, 255, 255)'
    
    console.log(p)
}

