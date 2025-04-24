document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()

        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')
    
    const response = await fetch(href)
    const html = await response.text()

    if(response.status >= 200 && response.status <= 300) {
        return carregaResultado(html)
    }else {
        throw new Error('ERRO 404')
    }
}

function carregaResultado(html) {
    document.querySelector('.resultado').innerHTML = html
}