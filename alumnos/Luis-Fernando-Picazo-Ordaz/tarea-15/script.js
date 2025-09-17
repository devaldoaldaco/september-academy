const addBtn = document.getElementById('btn-add')
const addInput = document.getElementById('input-add')
const taskContainer = document.querySelector('.tasks-container')
const textTaskContainer = document.querySelector('p')
let tasks = {}


addBtn.addEventListener('click', () => {
    const inputContent = addInput.value.trim()
    if (!inputContent) {
        return
    }
    const id = Object.keys(tasks).length + 1
    const taskContent = document.createElement('div')
    taskContent.id = id
    taskContent.className = 'task-content'

    const task = document.createElement('div')
    task.className = 'task'

    const buttonDelete = document.createElement('button')
    buttonDelete.id = id
    buttonDelete.classList = 'delete-btn'

    const inputCheckBox = document.createElement('input')
    inputCheckBox.type = 'checkbox'
    inputCheckBox.id = id

    const label = document.createElement('label')
    label.textContent = inputContent

    taskContainer.appendChild(taskContent)
    taskContent.appendChild(task)
    taskContent.appendChild(buttonDelete)
    task.appendChild(inputCheckBox)
    task.appendChild(label)

    buttonDelete.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"
                        viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                        <path fill="#ffffff"
                            d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z" />
                    </svg>
    `

    buttonDelete.addEventListener('click', () => {
        const taskToRemove = document.getElementById(buttonDelete.id)
        taskContainer.removeChild(taskToRemove)
        delete tasks[buttonDelete.id]
        tasksIsEmpty()
    });

    inputCheckBox.addEventListener('click', () => {
        if (tasks[buttonDelete.id]._status === 'pendiente') {
            taskContent.classList.add('completed')
            tasks[buttonDelete.id]._status = 'completado'
        } else {
            taskContent.classList.remove('completed')
            tasks[buttonDelete.id]._status = 'pendiente'
        }
    });

    
    tasks[`${buttonDelete.id}`] = { title: inputContent, _status: 'pendiente' }
    addInput.value = ''
    tasksIsEmpty()
})

function tasksIsEmpty() {
    if (Object.keys(tasks).length === 0) {
        textTaskContainer.hidden = false
    } else {
        textTaskContainer.hidden = true
    }
}
