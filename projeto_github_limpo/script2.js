/* Seleciona os elementos HTML utilizados pelo sistema. */
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

/* Cria um item visual na lista. */
function criarItemNaTela(texto) {
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
}

/* Executa o cadastro quando o formulário é enviado. */
formulario.addEventListener("submit", function (evento) {
  // Impede o comportamento padrão do formulário,
  // que seria enviar os dados e recarregar a página.
  // Assim, o JavaScript assume o controle da ação.
  evento.preventDefault();

  const texto = input.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa.";
    return;
  }

  criarItemNaTela(texto);

  input.value = "";
});
