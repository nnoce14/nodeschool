const combine = require('stream-combiner')
const through = require('through2')
const split = require('split2')
const zlib = require('zlib')

module.exports = function() {
    let current

    let stream = through(function(line, _, next) {
        if (line.length === 0) return next()
        let row = JSON.parse(line)

        if (row.type === 'genre') {
            if (current) this.push(JSON.stringify(current) + '\n')
            current = { name: row.name, books: [] }
        } else if (row.type === 'book') {
            current.books.push(row.name)
        }
        
        next()
    }, function(next) {
        if (current) this.push(JSON.stringify(current) + '\n')
        next()
    })

    return combine(split(), stream, zlib.createGzip())
}