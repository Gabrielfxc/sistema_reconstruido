/*
  Versao inicial da aula: o usuario envia o formulario,
  o JavaScript le o texto digitado e cria um <li> diretamente na tela.
  Aqui ainda nao existe array de tarefas nem funcao de renderizacao.
*/

/* Seleciona os elementos HTML utilizados pelo sistema. */
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

/* Executa o cadastro quando o formulario e enviado. */
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();

  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa.";
    return;
  }

  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  input.value = "";
});
