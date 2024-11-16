// Função para capturar os dados do formulário
function getUserData() {
  const inputNameUser = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  const user = {
    name: inputNameUser,
    email: inputEmail,
    password: inputPassword,
  };

  return user;
}

// Função para criar uma conta
function createAccount() {
  const user = getUserData();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(user); // Adiciona o novo usuário ao array

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "../form_login/formLogin.html";
}

// Inicializa o usuário padrão ao carregar o script
