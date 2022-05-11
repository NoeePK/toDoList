const createNewTask = (text) => {
    const newTask = document.createElement('div')
    newTask.classList.add('task')

    const taskLabel = document.createElement('label')
    taskLabel.classList.add('label')
    taskLabel.innerText = text
    newTask.appendChild(taskLabel)

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