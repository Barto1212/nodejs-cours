const yargs = require("yargs");
const fs = require("fs");
const stat = require("fs").stat;

function addToDo(todo) {
  stat("todoList.txt", (err, stat) => {
    if (stat) {
      fs.appendFileSync("todoList.txt", `\n${todo}`);
    } else {
      fs.appendFileSync("todoList.txt", `${todo}`);
    }
  });
}

function readAllTodo() {
  try {
    const todos = fs.readFileSync("todoList.txt");
    console.log(todos.toString());
  } catch (error) {
    // Pas d'erreur si fichier inexistant
    if (error.errno !== -2) {
      console.log(error);
    }
  }
}

function deleteOneToDo(toDelete) {
  const todos = fs.readFileSync("todoList.txt");
  todosArray = todos.toString().split("\n");
  const newToDoList = todosArray.filter((toDo) => toDo !== toDelete);
  fs.unlinkSync("todoList.txt");
  newToDoList.forEach((todo) => addToDo(todo));
}

const argv = yargs
  .option("add", {
    alias: "a",
    description: "create and save a todo in a file",
    type: "string",
  })
  .option("read", {
    alias: "l",
    description: "read all the todo in the file",
    type: "boolean",
  })
  .option("delete", {
    alias: "d",
    description: "delete a todo",
    type: "string",
  })
  .option("reset", {
    alias: "r",
    description: "delete all todos",
    type: "boolean",
  })
  .help()
  .alias("help", "h").argv;

if (argv.add) {
  addToDo(argv.add);
}

if (argv.read) {
  readAllTodo(argv.add);
}

if (argv.delete) {
  deleteOneToDo(argv.delete);
}

if (argv.reset) {
  fs.unlinkSync("todoList.txt");
}
