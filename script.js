

const taskDone = (event) => {
    label.style.text = ".task_btn__label"

}

const createNewTask = (text) => {
    const newTask = document.createElement('div')
    

    const taskBox = document.createElement('button')
    taskBox.classList.add("task_btn")
    newTask.appendChild(taskBox)

    const taskLabel = document.createElement('label')
    taskLabel.classList.add("task_btn")
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