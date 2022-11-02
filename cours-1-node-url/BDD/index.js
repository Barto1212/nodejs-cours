const yargs = require('yargs')
const fs = require('fs')
const stat = require('fs').stat

function addToDo (todo) {
  stat('todoList.txt', (err, stat) => {
    if (stat) {
      fs.writeFileSync('./BDD/todoList.txt',`\n${todo}`)
    } else {
      fs.writeFileSync('./BDD/todoList.txt',`${todo}`)
    }
  })
}

function readAllTodo () {
  try {
    const todos = fs.readFileSync('./BDD/todoList.txt', 'utf-8')
    return todos.split('\n')
  } catch (error) {
    if (error.errno === -2) {
      // no todolist
      return []
    } else {
      console.log(error)
    }
  }
}

function deleteOneToDo (toDelete) {
  fs.readFile('todoList.txt')
    .then(todos => {
      todosArray = todos.toString().split('\n')
      const newToDoList = todosArray.filter(toDo => toDo !== toDelete)
      fs.unlink('todoList.txt')
        .then(() => newToDoList.forEach(todo => addToDo(todo)))
    })
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

module.exports = { readAllTodo }