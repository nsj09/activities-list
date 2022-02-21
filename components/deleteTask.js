const buttonTaskDelete = () => {
    const buttonDelete = document.createElement('button')


    buttonDelete.innerText = 'Deletar'

    buttonDelete.addEventListener('click', taskDelete)

    return buttonDelete
}

const taskDelete = (evento) => {

    const buttonDeleta = evento.target

    const taskDelete = buttonDeleta.parentElement

    taskDelete.remove()

    return buttonDeleta

}

export default buttonTaskDelete