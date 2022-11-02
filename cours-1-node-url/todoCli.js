// const url = require('url')
const yargs = require('yargs');
const url = require('url');


const myURL = new URL('http://localhost')
myURL.port = 3000
console.log(myURL);
// myURL.pathname = 'posts'

// fetch(myURL.href)
//   .then(response => response.json())
//   .then(data => console.log(data))

const addToDo = (todo) => {
  myURL.pathname = "efzvf"
}


const argv = yargs
  .option('add', {
    alias: 'a',
    description: 'add a todo',
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