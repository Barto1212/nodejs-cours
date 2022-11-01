import fs from 'fs/promises'

fs.readFile('hello.txt')
  .then(data => console.log(data.toString()))
  .catch(error => console.log(error))

console.log('Lecture en cours');