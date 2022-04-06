const http = require('http')
const map = require('through2-map')

http.createServer((request, response) => {
    request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response)
}).listen(+process.argv[2])