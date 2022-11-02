const postURL = new URL('http://localhost:4000')

function addTodo(todo) {
  postURL.searchParams.set('todo', todo)
  postURL.pathname = 'add'
  fetch(postURL, { method: 'POST' })
    .then((res) => {
    window.location.reload(true)
    })
    .catch(error => console.log(error))
}

function deleteOneToDo (todo) {
  postURL.searchParams.set('todo', todo)
  postURL.pathname = 'delete'
  fetch(postURL, { method: 'POST' })
    .then(res => { window.location.reload(true) })
    .catch(err => console.log(err))
}

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const todoList = document.querySelector('#todoList')

todoList.addEventListener("click", e => {
  if (e.target.nodeName === "LI") {
    console.log(e.target.textContent);
    deleteOneToDo(e.target.textContent)
  }
})

form.addEventListener("submit", e => {
  e.preventDefault()
  const newTodo = input.value
  addTodo(newTodo)
})

fetch('http://localhost:4000/todos')
.then(data => data.json())
.then(todoArray => {
  todoArray.forEach(todo => {
    const li = document.createElement('li')
    li.innerHTML = todo
    todoList.appendChild(li)
  })
})

input.focus()
