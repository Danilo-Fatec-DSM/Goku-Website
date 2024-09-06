const buttonLogin = document.querySelector('#button-login')
const buttonAccount = document.querySelector('#button-create-acount')

function buttonLoginClicked() {
    window.location.href = 'form_login/formLogin.html'
    console.log('clicked')
}

function buttonCreatAccountClicked() {
    window.location.href = 'form_account/formAccount.html'
    console.log('criar conta')
}