const fs = require('fs/promises')
const http = require('http')

const contenuTexte = {'Content-Type': 'text/plain; charset=UTF-8' }

staticServer = http.createServer((req, res) => {
  const  { url, method } = req
  if (method === 'GET') {
    fs.readFile(`./public${url}.html`)
      .then(data => {
        res.writeHead(200, {'Content-Type': 'text/html' })
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