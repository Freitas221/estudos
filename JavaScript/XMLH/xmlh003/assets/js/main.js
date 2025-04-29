// fetch('assets/test/pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaPagina(json))

axios('assets/test/pessoas.json')
    .then(resposta=> carregaPagina(resposta.data))

function carregaPagina(json) {
    const table = document.createElement('table')

    for(valor of json) {
        const tr = document.createElement('tr')

        const pessoas = [valor.nome, valor.idade, valor.salario]

        for(valor of pessoas) {
            const td = document.createElement('td')
            td.textContent = valor
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

    document.querySelector('.resultado').appendChild(table)
}