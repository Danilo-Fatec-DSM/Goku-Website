let produtosComprados =
  JSON.parse(sessionStorage.getItem("produtosComprados")) || [];

const buttonLogin = document.querySelector("#button-login");
const buttonAccount = document.querySelector("#button-create-acount");

function buttonLoginClicked() {
  window.location.href = "../form_login/formLogin.html";
}

function buttonCreatAccountClicked() {
  window.location.href = "../form_account/formAccount.html";
}

let form = document.getElementById("formulario");

let precoTotal = 0;

const containerProdutos = document.querySelector("#produtos");
// Função para renderizar os produtos
function renderizarCarrinho() {
  // Limpar o conteúdo antes de atualizar
  containerProdutos.innerHTML = "";
  precoTotal = 0; // Resetando o preço total

  // Construir a lista de produtos
  produtosComprados.forEach((produto, index) => {
    precoTotal += produto.precoProduto;

    containerProdutos.innerHTML += `
       <li>
        <img src="${produto.imagemProduto}" alt="${produto.nomeProduto}">
        <p>${produto.nomeProduto}</p>
        <p>R$ ${produto.precoProduto.toFixed(2)}</p>
        <button class="buttonDelete" onclick="tirarProdutoDoCarrinho(${index})">Excluir</button>
      </li>
    `;
  });
  // Exibir o preço total atualizado
  let total = (document.querySelector(
    ".total"
  ).textContent = `R$ ${precoTotal.toFixed(2)}`);
}

// Seleciona as imagens das bandeiras
const bandeiras = document.querySelectorAll(".bandeira");
const resultado = document.getElementById("resultado");

// Adiciona um evento de clique para cada imagem de bandeira
bandeiras.forEach((bandeira) => {
  bandeira.addEventListener("click", () => {
    // Remove a classe 'selecionado' de todas as bandeiras
    bandeiras.forEach((b) => b.classList.remove("selecionado"));

    // Adiciona a classe 'selecionado' à bandeira clicada
    bandeira.classList.add("selecionado");

    // Exibe o método de pagamento escolhido
    if (bandeira.id === "visa") {
      alert("Método de pagamento escolhido: Visa");
    } else if (bandeira.id === "mastercard") {
      alert("Método de pagamento escolhido: MasterCard");
    } else if (bandeira.id === "pix") {
      alert("Método de pagamento escolhido: Pix");
    }
  });
});

// Função para tirar o produto do carrinho
function tirarProdutoDoCarrinho(index) {
  // Remover o produto do array
  produtosComprados.splice(index, 1);

  // Atualizar o localStorage
  sessionStorage.setItem(
    "produtosComprados",
    JSON.stringify(produtosComprados)
  );
  // Re-renderizar o carrinho com o novo array
  renderizarCarrinho();
}

// Inicializar o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarCarrinho);

function pagar() {
  alert("Pagamento concluido");
}
