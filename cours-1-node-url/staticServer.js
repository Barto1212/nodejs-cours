const fs = require('fs/promises')
const http = require('http')

const cors = { "Access-Control-Allow-Origin": "*" }
const contenuTexte = { 'Content-Type': 'text/plain; charset=UTF-8', ...cors }

staticServer = http.createServer((req, res) => {
  const  { url, method } = req
  if (method === 'GET') {
    if (url === '/') { 
      const redirectURL = new URL("http://localhost")
      redirectURL.pathname = "/index"
      res.writeHead(301, { "Location": redirectURL, ...cors })
      res.end()
      return
     }
    fs.readFile(`./public${url}.html`)
      .then(data => {
        res.writeHead(200, {'Content-Type': 'text/html', ...cors })
        res.end(data)
      })
      .catch(err =>{
        if (err.errno === -2) {
          res.writeHead(404, contenuTexte)
          res.end('Page non trouvée')
        } else {
          res.writeHead(500, contenuTexte)
          res.end('Erreur serveur')
        }
      })
      return
    }
  res.writeHead(404, contenuTexte)
  res.end('Uniquement des requètes get')
})

module.exports = staticServer