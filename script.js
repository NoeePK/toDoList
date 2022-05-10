


const formText = ['#task_text']

document.getElementById('new_task_button').onclick = function () {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = 'task'
    checkbox.name = 'task'
    document.tasks.appendChild(formText)

const label = document.createElement('#task_text')
    label.htmlFor = '#task_text'
    label.appendChild(document.createTextNode(formText))

    const tasks = document.getElementById('tasks')
    tasks.appendChild(checkbox)
    



}

const createNewTask = (text) => {
    const newTask = document.createElement('checkbox')
    newTask.classList.add('task')

    const taskDescription = document.createElement('p')
    taskDescription.classList.add('task_text')
    taskDescription.innerText = text
    newTask.appendChild(taskDescription)

    return newTask
}

const resetForm = () => {
    document.querySelector('#task_text').value = ''
}

const handleSubmit = (event) => {
    event.preventDefault()
    const formText = document.querySelector('#task_text').value
    const newTask = createNewTask(formText)
    document.querySelector('#tasks').appendChild(newTask)

    resetForm()
}