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
  let produtos = JSON.parse(localStorage.getItem("produtosComprados")) || [];
  produtos.push(produto);
  localStorage.setItem("produtosComprados", JSON.stringify(produtos));
}
