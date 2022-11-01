import fs from 'fs'

const data = fs.readFileSync('hello.txt')
console.log(data.toString());