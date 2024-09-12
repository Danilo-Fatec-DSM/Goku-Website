function getUserData() {
    const inputNameUser = document.getElementById('nameUser').value
    const inputEmail = document.getElementById('email').value
    const inputPassword = document.getElementById('password').value

    const user = {
        name: inputNameUser,
        email: inputEmail,
        password: inputPassword,
    }


    return user
}



function createAccount() {
    const user = getUserData()
    localStorage.setItem('user', JSON.stringify(user));
    alert('Conta cadastrada')
    window.location.href = '../pages/formLogin.html'
}