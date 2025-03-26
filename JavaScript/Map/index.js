const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

/*
const novasPessoas = {}
for(pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas[id] = {...pessoa}
}
console.log(novasPessoas)

DESSA MANEIRA NÃO SERIA POR ORDEM DE INSERÇÃO, MAS POR ORDEM CRESCENTE, E OS IDENTIFICADORES SERIAM UMA STRING (PODERIA SER CONVERTIDA PARA NUMBER).
*/


const novasPessoas = new Map()
for(const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, {...pessoa})
}

for(const pessoas of novasPessoas.values()){
    const {id, nome} = pessoas
    console.log(id,nome)
}

console.log(novasPessoas.get(2))

// novasPessoas.delete(2) -> Deleta a chave especificada.