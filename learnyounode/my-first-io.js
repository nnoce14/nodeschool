const fs = require('fs')

let fileContents = fs.readFileSync(process.argv[2])

console.log(fileContents.toString().split('\n').length-1)