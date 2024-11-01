let produtosComprados = JSON.parse(localStorage.getItem("produtosComprados"));

const buttonLogin = document.querySelector("#button-login");
const buttonAccount = document.querySelector("#button-create-acount");

function buttonLoginClicked() {
  window.location.href = "../form_login/formLogin.html";
}

function buttonCreatAccountClicked() {
  window.location.href = "../form_account/formAccount.html";
}

let precoTotal = 0;
let imagemProduto = 0;

for (let i = 0; i < produtosComprados.length; i++) {
  precoTotal += produtosComprados[i].precoProduto;
  imagemProduto = produtosComprados[i].imagemProduto;
}

for (let i = 0; i < produtosComprados.length; i++) {
  let containerProduto = document.createElement("div");
  
  let lista = document.createElement("li");
  document.getElementById("produtos").appendChild(lista);
  lista.appendChild(containerProduto);
  
  let img = document.createElement("img");
  img.setAttribute("src", `${imagemProduto}`);
  containerProduto.appendChild(img);
  
  let containerNome = document.createElement("p");
  containerNome.textContent = produtosComprados[i].nomeProduto;
  containerProduto.appendChild(containerNome);

  let containerPreco = document.createElement("p");
  containerPreco.textContent = `R$ ${produtosComprados[i].precoProduto}`;
  containerProduto.appendChild(containerPreco);
}

let total = (document.querySelector(".total").textContent += precoTotal);

// let imagemProduto = produtosComprados.imagemProduto

// let total = document.querySelector('.total').innerHTML = `<img src="${imagemProduto}">`

