import buttonTaskFinished from './components/completeTask.js'
import buttonTaskDelete from './components/deleteTask.js'


const createTask = (evento) => {

    evento.preventDefault()

    const listTask = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const value = input.value

    const task = document.createElement('li')
    task.classList.add('task')
    const conteudo = `<p class="content">${value}</p>`

    task.innerHTML = conteudo

    task.appendChild(buttonTaskFinished())
    task.appendChild(buttonTaskDelete())
    listTask.appendChild(task)
    input.value = ''
}


const newTask = document.querySelector('[data-form-button]')

const input = document.querySelector('[data-form-input]')

const value = input.value

newTask.addEventListener('click', createTask)

