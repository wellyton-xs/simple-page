let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelName')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let senha2 = document.querySelector('#senha2')
let labelSenha2 = document.querySelector('#labelSenha2')
let validSenha2 = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = '*insira no mínimo 5 caracteres.*'
        nome.setAttribute('style', 'color:red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color:#00ff88')
        labelNome.innerHTML = 'Usuário'
        nome.setAttribute('style', 'color:#00ff88')
        validNome = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color:red')
        labelSenha.innerHTML = '*insira no mínimo 6 caracteres.*'
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color:#00ff88')
        labelSenha.innerHTML = 'senha'
        senha.setAttribute('style', 'color:#00ff88')
        validSenha = true
    }
})

senha2.addEventListener('keyup', () => {
    if (senha.value != senha2.value) {
        labelSenha2.setAttribute('style', 'color:red')
        labelSenha2.innerHTML = '*as senhas não conferem.*'
        senha2.setAttribute('style', 'color:red')
        validSenha2 = false
    } else {
        labelSenha2.setAttribute('style', 'color:#00ff88')
        labelSenha2.innerHTML = "confirme a senha"
        senha2.setAttribute('style', 'color:#00ff88')
        validSenha2 = true
    }
})




function cadastrar() {
     if (validNome && validSenha && validSenha2) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        // window.location.href = 'home.html';
        listaUser.push(
            {
                nomeCad: nome.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display:block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...<stong>'
        msgError.setAttribute('style', 'display:none')
        msgError.innerHTML = ''

        setTimeout(()=>{
            window.location.href = "/html/index.html"
        }, 3000)
     } else {
        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Preencha todos os campos corretamente.'
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...<stong>'
        msgSuccess.setAttribute('style', 'display:none')
     }
}

/*nome.addEventListener('keyup', ()=> {
    if (nome.value.length <= 2){
        user.setAttribute('style', 'color:red')
    }else {
        user.setAttribute('style', 'color:red')
    }
}) */

