const net = require('net')
const strftime = require('strftime')

const server = net.createServer((socket) => {
    socket.end(strftime('%F %H:%M', new Date()) + '\n')
})

server.listen(+process.argv[2])