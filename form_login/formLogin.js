const users = JSON.parse(localStorage.getItem("users"));

function login() {
  let email = document.querySelector("#login").value;
  let senha = document.querySelector("#password").value;
  //laço for

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == senha) {
      alert(`${users[i].name}, logou`);
      window.location.href = '../index.html'
    }
  }
}

function garantirUsuarioDanilo() {
  // Obtém a lista de usuários do localStorage
  const usuarios = JSON.parse(localStorage.getItem("users")) || [];

  // Verifica se o usuário Danilo já está cadastrado
  const daniloExistente = usuarios.find(user => user.email === "danilo12@gmail.com");

  if (!daniloExistente) {
    // Se o usuário Danilo não estiver no localStorage, cria e adiciona ele
    usuarios.push({
      name: "Danilo",
      email: "danilo12@gmail.com",
      password: "12345"
    });

    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem("users", JSON.stringify(usuarios));
  }
}
garantirUsuarioDanilo()
