const http = require('http')

function serverCallback (req, res) {
  res.end('salut tout le monde')
}


function listenCallback() {
  console.log('server listening on port 3000')
}


const server = http.createServer(serverCallback)

server.listen(3000, listenCallback)