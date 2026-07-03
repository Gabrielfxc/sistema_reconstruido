/*
  Versão da aula em que o cadastro deixa de criar o item direto na tela.
  Agora, a tarefa é guardada primeiro no array tarefas com push().
  Depois, a função renderizarTarefas() limpa a lista e redesenha a tela
  a partir dos dados que estão no array.
*/


/* Seleciona os elementos HTML utilizados pelo sistema. */
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

/* Guarda as tarefas como dados, antes de desenhar na tela. */
const tarefas = [];

/* Transforma os dados do array em itens visuais na página. */
function renderizarTarefas() {
  lista.innerHTML = ""; // innerHTML é uma propriedade do DOM; aqui ela limpa o HTML da lista.

  tarefas.forEach(function (tarefa) { // forEach é um método de array; ele passa por cada tarefa.
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.appendChild(item);
  });
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

  tarefas.push(texto); // push é um método de array: adiciona o texto ao final da lista de dados.
  renderizarTarefas(); // chama a função que redesenha a tela a partir do array tarefas.

  input.value = "";
});

