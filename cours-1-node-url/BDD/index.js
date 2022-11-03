const fs = require('fs')

function addToDo (todo) {
  try {
    const todoList = fs.readFileSync('./BDD/todoList.txt', 'utf-8')
    if (todoList !== '') {
      fs.appendFileSync('./BDD/todoList.txt',`\n${todo}`)
      return
    }
  } catch (error) {
    // Si le fichier n'existe pas on ne tient pas compte de l'erreur
    if (!(error.errno === -4058 || error.errno === -2)) {
      throw new Error(error)
    }
  }
  fs.writeFileSync('./BDD/todoList.txt',`${todo}`)
}

function readAllTodo () {
  try {
    const todos = fs.readFileSync('./BDD/todoList.txt', 'utf-8')
    return todos.split('\n')
  } catch (error) {
    if (error.errno === -2 || error.errno === -4058) {
      // no todolist
      return []
    } else {
      console.log(error)
    }
  }
}

function deleteOneToDo (toDelete) {
    todosArray = readAllTodo()
    const newToDoList = todosArray.filter(toDo => toDo !== toDelete)
    fs.unlinkSync('./BDD/todoList.txt')
    newToDoList.forEach(todo => addToDo(todo))
}

module.exports = { readAllTodo, addToDo, deleteOneToDo }