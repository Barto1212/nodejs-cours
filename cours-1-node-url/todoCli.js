const yargs = require('yargs')
const fs = require('fs')
const { readAllTodo, deleteOneToDo, addToDo } = require('./BDD/index.js')

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
  console.log(readAllTodo())
}

if (argv.delete) {
deleteOneToDo(argv.delete)
}

if (argv.reset) {
  try {
    fs.unlinkSync('./BDD/todoList.txt')
} catch (error) {
  if (error?.errno === -2) {
    console.log('rien a supprimer');
  } else {
    throw new Error(error)
  }
}
}
