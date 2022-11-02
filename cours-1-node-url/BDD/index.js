const yargs = require('yargs')
const fs = require('fs')

function addToDo (todo) {
  try {
    const todoList = fs.readFileSync('./BDD/todoList.txt', 'utf-8')
    if (todoList !== '') {
      fs.appendFileSync('./BDD/todoList.txt',`\n${todo}`)
      return
    }
  } catch (error) {
    if (error.errno !== -4058) {
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
    console.log(todosArray);
    const newToDoList = todosArray.filter(toDo => toDo !== toDelete)
    console.log(newToDoList)
    fs.unlinkSync('./BDD/todoList.txt')
    newToDoList.forEach(todo => addToDo(todo))
}

const argv = yargs
  .option('add', {
    alias: 'a',
    description: 'create and save a todo in a file',
    type: 'string'
  })
  .option('read', {
    alias: 'l',
    description: 'read all the todo in the file',
    type: 'boolean'
  })
  .option('delete', {
    alias: 'd',
    description: 'delete a todo',
    type: 'string'
  })
  .option('reset', {
    alias: 'r',
    description: 'delete all todos',
    type: 'boolean'
  })
  .help()
  .alias('help', 'h').argv

if (argv.add) {
  addToDo(argv.add)
}

if (argv.read) {
  readAllTodo(argv.add)
}

if (argv.delete) {
  deleteOneToDo(argv.delete)
}

if (argv.reset) {
  fs.unlink('todoList.txt')
}

module.exports = { readAllTodo, addToDo, deleteOneToDo }