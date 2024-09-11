const user = JSON.parse(localStorage.getItem('user'));

function dados() {
    const ds = [
        {
            id: 69,
            login: "Pedro",
            password: "ximbinha69",
            email: "ximbinha20matar@gmail.com"
        },
        {
            id: 24,
            login: "Zamengo",
            password: "tuaMaeNoCafeDaTarde",
            email: "gostosa24@gmail.com"
        },
        {
            login: user.name,
            password: user.password
        }
    ]
    return ds
}

const usuario = dados()


function login() {

    let log = document.querySelector('#login').value 
    let senha = document.querySelector('#password').value
    
    console.log(log)

    //laço for
    for (let i = 0; i < usuario.length; i++) {
        if (log == usuario[i].login && senha == usuario[i].password) {
            console.log('Você logou')
            alert('Você logou!')
            window.location.href = '../teste.html'
        }
    }
    
}



