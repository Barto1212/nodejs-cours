const http = require('http')
const fs = require('fs/promises')

const todoList = [
  'Manger',
  'Faire la vaisselle',
]

function getList (todoArray) {
  let list = ''
  todoArray.forEach(todo => {
    list = list + `<li>${todo}</li>`
  });
  return list
}

const server = http.createServer((req, res) => {
  // ------GET REQUESTS------
  const  { url, method } = req
  if (method === "GET") {
    // if (url === '/todo') {
    //   res.writeHead(200, {'Content-Type': 'application/json'})
    //   res.end(JSON.stringify(todo))
    //   return
    // }
    fs.readFile(url.slice(1) + '.html', 'utf-8')
      .then(data => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        data = data.replace('{{ todoList }}', getList(todoList))
        res.end(data)
      })
      .catch(err =>{
        if (err.errno === -2) {
          res.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8' })
          res.end('Page non trouvée')
        }
      })
  }
  // ------POST REQUESTS------
  if (req.method === "POST") {
    let todo = ""
    req.on('data', stream => {
      todo = todo + stream
    })
    req.on('end',() => {
      todoList.push(todo)
    })
    res.writeHead(201).end('ajouté')
  }

})

server.listen(3000, () => console.log('listening on 3000'))