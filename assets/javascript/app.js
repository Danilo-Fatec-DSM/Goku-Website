const buttonLogin = document.querySelector('#button-login')
const buttonAccount = document.querySelector('#button-create-acount')

function buttonLoginClicked() {
    window.location.href = '../pages/formLogin.html'
    console.log('clicked')
}

function buttonCreatAccountClicked() {
    window.location.href = '../pages/formAccount.html'
    console.log('criar conta')
}