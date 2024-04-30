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
  li.textContent = taskTitle
  todoListUl.appendChild(li)
})