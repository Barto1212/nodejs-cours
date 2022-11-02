const http = require('http')
const url = require('url')

const textContent = {'Content-Type': 'text/plain; charset=UTF-8', "Access-Control-Allow-Origin": "*" }
const jsonContent = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }

const toDoListBDD = [
  'Faire la vaisselle',
  'Regarder une série'
]

const getRequest = (req, res) => {
  if (req.url === '/todos') {
    res.writeHead(200,  jsonContent)
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

const putRequest = (req, res) => {
  const clientUrl = url(req)
  console.log(clientUrl);
  res.writeHead(201).end('ok')
}

const serverToDoBackend = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      getRequest(req, res)
      break
  
    case 'PUT':
      putRequest(req, res)
      break
    case 'OPTION':
      console.log('option');

    default:
      handle404(req, res)
      break;
  }
})

module.exports = serverToDoBackend
