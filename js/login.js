let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelName')
let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')


function join() {
    let listaUser = []

    let userValid = {
        user: '',
        senha: ''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(nome.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: element.nomeCad,
                senha: element.senhaCad
            }
        }
    });
    console.log(userValid)
}

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