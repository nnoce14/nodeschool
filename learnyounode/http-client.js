const http = require('http')

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8')
    let data = []
    response.on('data', (chunk) => {data.push(chunk)})
    response.on('end', () => {
        data.forEach(item => {
            console.log(item)
        })
    })
}).on('error', (e) => {
    console.error('There was an error:', e)
})