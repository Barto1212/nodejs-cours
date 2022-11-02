const http = require('http')
const url = require('url')
const {readAllTodo} = require('./BDD/index.js')

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
  res.end('Uniquement des requètes get')
}

const postRequest = (req, res) => {
  // const clientUrl = url.parse(req.url, true)
  const params = new URLSearchParams(req.url)
  const todo = params.get('todo')
  console.log(clientUrl.hash);
  res.writeHead(201, textContent).end('ok')
}

const serverToDoBackend = http.createServer((req, res) => {
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

module.exports = serverToDoBackend
