const defaultUser = {
  name: "Usuário Padrão",
  email: "default@user.com",  
  password: "123456", // Use uma senha segura em produção
};

// Função para inicializar o usuário padrão
function initializeDefaultUser() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Verifica se o usuário padrão já existe
  const userExists = users.some((user) => user.email === defaultUser.email);

  if (!userExists) {
    users.push(defaultUser); // Adiciona o usuário padrão apenas se não existir
    localStorage.setItem("users", JSON.stringify(users));
  }
}
initializeDefaultUser();

const buttonLogin = document.querySelector("#button-login");
const buttonAccount = document.querySelector("#button-create-acount");
const buttonCart = document.querySelector("#button-shopping-cart");

function buttonLoginClicked() {
  window.location.href = "form_login/formLogin.html";
  console.log("clicked");
}

function buttonCreatAccountClicked() {
  window.location.href = "form_account/formAccount.html";
  console.log("criar conta");
}

function buttonShoppingCart() {
  window.location.href = "shopping_cart/cart.html";
}

const botoes = document.querySelectorAll(".btn-comprar");
function comprar(imagemProduto, nomeProduto, precoProduto) {
  let produto = {
    imagemProduto: imagemProduto,
    nomeProduto: nomeProduto,
    precoProduto: precoProduto,
  };
  
  let produtos = JSON.parse(sessionStorage.getItem("produtosComprados")) || [];
  produtos.push(produto);
  sessionStorage.setItem("produtosComprados", JSON.stringify(produtos));
}

// Função para excluir o último usuário
function deleteLastUser() {
  // Obtém a lista de usuários do localStorage
  let users = JSON.parse(localStorage.getItem("users"));

  // Verifica se há usuários no localStorage
  if (users && users.length > 0) {
    // Se houver mais de um usuário, pode excluir o último
    if (users.length > 1) {
      users.pop(); // Remove o último usuário da lista
    } else {
      // Se houver apenas 1 usuário, não faz nada
      alert("Não há usuários para excluir.");
      return;
    }

    // Atualiza o localStorage com a lista de usuários modificada
    localStorage.setItem("users", JSON.stringify(users));

    // Mensagem de sucesso
    alert("Usuário excluído!");
  } else {
    // Caso não haja usuários
    alert("Não há usuários para excluir.");
  }
}


// Adiciona o evento de clique ao botão "Excluir Último Usuário"
document.getElementById("deleteLastUser").addEventListener("click", deleteLastUser);
