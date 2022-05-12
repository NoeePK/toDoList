const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
}, false);


function newTask() {
    const li = document.createElement("li");
    const taskInputValue = document.getElementById("new_task_input").value;
    const t = document.createTextNode(taskInputValue);
    li.appendChild(t);
    if (taskInputValue === '') {
        alert("Tu n'as pas besoin d'une tâche vide pour ne rien faire de ta journée");
    } else {
        document.getElementById("tasks").appendChild(li);
    }
    document.getElementById("new_task_input").value = "";

    const span = document.createElement("span");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

}
