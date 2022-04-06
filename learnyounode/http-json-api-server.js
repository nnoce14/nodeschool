const http = require('http')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://locahost')

    res.writeHead(200, { 'Content-Type': 'application/json'})

    if (url.pathname === '/api/parsetime') {
        const date = new Date(url.searchParams.get('iso'))
        const responseData = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }

        res.end(JSON.stringify(responseData))
    } else if (url.pathname === '/api/unixtime') {
        res.end(JSON.stringify({ unixtime: new Date(url.searchParams.get('iso')).getTime()}))
    }


}).listen(+process.argv[2])