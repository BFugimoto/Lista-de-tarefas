const tarefaInput = document.getElementById("tarefaInput");
const addTarefa = document.getElementById("addTarefa");
const msgErro = document.getElementById("msgErro");

addTarefa.disabled = true;

tarefaInput.addEventListener("blur", () => {
    if(tarefaInput.value == ""){
        msgErro.innerHTML = "Por favor, insira uma tarefa!";
        addTarefa.style.cursor = "default";
        addTarefa.disabled = true;
    }else if(tarefaInput.value != ""){
        msgErro.innerHTML = "";
        addTarefa.style.cursor = "pointer";
        addTarefa.disabled = false;
    }
});

tarefaInput.addEventListener("focus", () => {
    msgErro.innerHTML = "";
});

addTarefa.addEventListener("click", () => {

    const tarefa = document.createElement("p");
    const btnRemove = document.createElement("button");
    const tarefaDiv = document.createElement("div");
    const tarefaLista = document.getElementById("tarefaLista");

    tarefa.innerHTML = tarefaInput.value;
    tarefa.style.cursor = "pointer";
    btnRemove.textContent = "Remover";
    
    tarefaDiv.classList.add("tarefa");
    tarefaDiv.appendChild(tarefa);
    tarefaDiv.appendChild(btnRemove);
    tarefaLista.appendChild(tarefaDiv);
    
    btnRemove.addEventListener("click", () => {
        tarefaLista.removeChild(tarefaDiv);
    });

    tarefa.addEventListener("click", () => {
        tarefa.style.textDecoration = "line-through";
        tarefa.style.cursor = "default";
        btnRemove.style.textDecoration = "line-through";
        btnRemove.disabled = true;
    });

    tarefaInput.value = ""; // Limpa o input da tarefa
    msgErro.innerHTML = ""; // Reseta a mensagem de erro
    addTarefa.disabled = true; // Desbilita o botão de adicionar tarefa

});