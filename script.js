
// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
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

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}