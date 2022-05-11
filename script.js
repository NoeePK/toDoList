
const createCheckboxButton = (button) => {
    const checkboxButton = document.createElement('button')
    document.querySelector('.taskDone').appendChild(checkboxButton)

}

const createNewTask = (text) => {
    const newTask = document.createElement('div')
    

    const taskBox = document.createElement("checkboxButton")
    taskBox.classList.add("taskDone")
    newTask.appendChild(taskBox)

    const taskLabel = document.createElement('label')
    taskLabel.classList.add("btn")
    taskLabel.innerText = text
    newTask.appendChild(taskLabel)

    /*
    const hiddenMssg = document.createElement('p')
    hiddenMssg.classList.add("btn__hidden")
    hiddenMssg.innerText = text
    newTask.appendChild(hiddenMssg)
*/ 
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