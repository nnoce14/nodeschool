const http = require('http')
const through = require('through2')

const port = +process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(through(function (buf, _, next) {
            const line = buf.toString().toUpperCase()
            this.push(line)
            next()
        }), done => done()).pipe(res)
    }
})

server.listen(port)