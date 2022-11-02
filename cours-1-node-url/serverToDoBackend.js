const http = require('http')

const textContent = {'Content-Type': 'text/plain; charset=UTF-8', "Access-Control-Allow-Origin": "*" }
const jsonContent = { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }

const toDoListBDD = [
  'Faire la vaisselle',
  'Regarder une série'
]

const serverToDoBackend = http.createServer((req, res) => {
  const  { url, method } = req
  if (method === 'GET') {
    if (url === '/todos') {
      res.writeHead(200,  jsonContent)
      res.end(JSON.stringify(toDoListBDD))
    } else {
      res.writeHead(404, textContent)
      res.end('non trouvé')
    }
    return
  }
  if (method === 'PUT') {
    res.writeHead(201).end('ok')
  }
  res.writeHead(404, textContent)
  res.end('Uniquement des requètes get')
})

module.exports = serverToDoBackend
