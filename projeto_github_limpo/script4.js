/*
  Versão da aula em que a tarefa deixa de ser um texto solto e passa a ser um objeto.
  Ainda estamos só no navegador: o array tarefas continua aqui, dentro do script.js.
  O que muda é a forma do dado guardado em cada posição do array.
*/


/* Seleciona os elementos HTML utilizados pelo sistema. */
const formulario = document.querySelector("#formulario");
const input = document.querySelector("#tarefa");
const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

/* Guarda as tarefas como objetos, não mais como textos soltos. */
const tarefas = [];

/* Transforma os dados do array em itens visuais na página. */
function renderizarTarefas() {
  lista.innerHTML = ""; // limpa a lista antes de desenhar tudo de novo

  tarefas.forEach(function (tarefa) { // cada tarefa agora é um objeto, não um texto
    const item = document.createElement("li");
    item.textContent = tarefa.texto; // pega a propriedade texto do objeto
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

  tarefas.push({ texto: texto, concluida: false }); // agora guardamos um objeto, não só o texto
  renderizarTarefas(); // chama a função que redesenha a tela a partir do array tarefas

  input.value = "";
});
