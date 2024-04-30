const form = document.querySelector('#todo-form')
const taskTitleInput = document.querySelector('#task-title-input')
const todoListUl = document.querySelector('#todo-list')

let tasks = []

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const taskTitle = taskTitleInput.value

  if(taskTitle.lenght < 3) {
    alert('Sua tarefa precisa de pelo menos 3 caracteres')
    return
  }

  tasks.push(taskTitle)
  const li = document.createElement('li')

  const input  = document.createElement('input')
  input.setAttribute('type', 'checkbox')

  const span = document.createElement('span')
  span.textContent = taskTitle

  const button = document.createElement('button')
  button.textContent = 'Remover'

  li.appendChild(input)
  li.appendChild(span)
  li.appendChild(button)

  todoListUl.appendChild(li)

  taskTitleInput.value = ''
})