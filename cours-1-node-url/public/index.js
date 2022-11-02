function addTodo(todo) {
  const postURL = new URL('http://localhost:4000')
  postURL.searchParams.set('todo', todo)
fetch(postURL,
  { method: 'POST' }
)
  .then((response) => {
  console.log(response)
  window.location.reload(true)
  })
  .catch(error => console.log(error))
}


const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const newTodo = document.querySelector("#input").value
  addTodo(newTodo)
})

fetch('http://localhost:4000/todos')
.then(data => data.json())
.then(todoArray => {
  const todoList = document.querySelector('#todoList')
  todoArray.forEach(todo => {
    const li = document.createElement('li')
    li.innerHTML = todo
    todoList.appendChild(li)
  })
})