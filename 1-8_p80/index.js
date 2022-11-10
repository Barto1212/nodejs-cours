const backend = require("./backend.js")
const static = require('./static.js')

static.listen(3000, () => console.log('server front listen 3000'))
backend.listen(4000, () => console.log('server back listen 4000'))