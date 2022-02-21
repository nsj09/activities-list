const buttonTaskFinished = () => {
    const buttonFinished = document.createElement('button')

    buttonFinished.classList.add('check-button')
    buttonFinished.innerText = 'Concluir'

    buttonFinished.addEventListener('click', taskFinished)

    return buttonFinished
}

const taskFinished = (evento) => {
    const buttonFinished = evento.target

    const taskDone = buttonFinished.parentElement

    taskDone.classList.toggle('done')
}

export default buttonTaskFinished