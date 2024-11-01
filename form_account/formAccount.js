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

function createAccount() {
  const user = getUserData();

  let users = JSON.parse(localStorage.getItem("users"));

  if (users == null) {
    users = [];
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = '../form_login/formLogin.html'

}
