const users = JSON.parse(localStorage.getItem("users"));

function login() {
  let email = document.querySelector("#login").value;
  let senha = document.querySelector("#password").value;
  console.log(users[0].email, users[0].password);
  //laço for

  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email && users[i].password == senha) {
      alert(`${users[i].name}, logou`);
      window.location.href = '../index.html'
    }
  }
}
