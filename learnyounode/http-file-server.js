const { createReadStream } = require('fs')
const http = require('http')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    createReadStream(file).pipe(res)
})

server.listen(+port)