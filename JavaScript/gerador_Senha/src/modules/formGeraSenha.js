import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('#iquant')
const ckdMaiusculas  = document.querySelector('#imai')
const ckdMinusculas  = document.querySelector('#imin')
const ckdNum  = document.querySelector('#inum')
const ckdSimbolos  = document.querySelector('#isim')
const gerarSenha  = document.querySelector('#gera-senha')


export default function formGeraSenha() {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    ckdMaiusculas.checked, //Essa propriedade informa se está ou não checado
    ckdMinusculas.checked,
    ckdNum.checked,
    ckdSimbolos.checked
  )
  return senha || "Nada selecionado"
}

