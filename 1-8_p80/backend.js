const http = require('http')
const url = require('url')
const {readAllTodo, addToDo, deleteOneToDo} = require('./BDD/index.js')

const textContent = {'Content-Type': 'text/plain; charset=UTF-8', "Access-Control-Allow-Origin": "*" }
const jsonContent = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }

const getRequest = async (req, res) => {
  if (req.url === '/todos') {
    res.writeHead(200,  jsonContent)
    const toDoListBDD = readAllTodo()
    res.end(JSON.stringify(toDoListBDD))
  } else {
    res.writeHead(404, textContent)
    res.end('non trouvé')
  }
}

const handle404 = (req, res) => {
  res.writeHead(404, textContent)
  res.end('requète non codée')
}

const postRequest = (req, res) => {
  const clientRequest = url.parse(req.url, true)
  const todo = clientRequest.query.todo
  switch (clientRequest.pathname) {
    case '/add':
      addToDo(todo)
      res.writeHead(201, textContent).end('ajouté')
      break
    case '/delete':
      deleteOneToDo(todo)
      res.writeHead(204, textContent).end('supprimé')
      break
    default:
      handle404(res, res)
      break
  }
}

const backendServer = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      getRequest(req, res)
      break
    case 'POST':
      postRequest(req, res)
      break
    default:
      handle404(req, res)
      break;
  }
})

module.exports = backendServer
