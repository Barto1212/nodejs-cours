const serverToDoBackend = require("./serverToDoBackend.js")
const staticServer = require('./staticServer.js')

staticServer.listen(80, () => console.log('serveur front listen 80'))
serverToDoBackend.listen(3000, () => console.log('serveur back listen 3000'))