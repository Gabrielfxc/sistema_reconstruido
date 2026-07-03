/* Seleciona os elementos HTML utilizados pelo sistema. */
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");

/* Armazena a quantidade atual de tarefas. */
let total = 0;

/* Executa o cadastro quando o formulário é enviado. */
formulario.addEventListener("submit", function (evento) {
  /* Impede o recarregamento da página. */
  evento.preventDefault();

  /* Lê o texto e remove espaços das extremidades. */
  const texto = input.value.trim();

  /* Interrompe o cadastro se o campo estiver vazio. */
  if (texto === "") {
    mensagem.textContent = "Digite uma tarefa.";
    return;
  }

  /* Cria o item e insere nele o texto digitado. */
  const item = document.createElement("li");
  item.textContent = texto;

  /* Alterna a tarefa entre normal e concluída. */
  item.addEventListener("click", function () {
    item.classList.toggle("concluida");
  });

  /* Cria o botão de remoção. */
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";

  /* Remove a tarefa e diminui o contador. */
  botaoRemover.addEventListener("click", function (evento) {
    evento.stopPropagation();
    item.remove();

    total = total - 1;
    contador.textContent = total;
  });

  /* Coloca o botão no item e o item na lista. */
  item.appendChild(botaoRemover);
  lista.appendChild(item);

  /* Aumenta e atualiza o contador. */
  total = total + 1;
  contador.textContent = total;

  /* Limpa o campo e mostra a confirmação. */
  input.value = "";
  mensagem.textContent = "Tarefa adicionada!";
});
