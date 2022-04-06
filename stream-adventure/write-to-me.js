const fs = require('fs')
const { Writable } = require('stream')

class WritableStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log('writing:', chunk.toString())
        callback()
    }
}

const stream = new WritableStream()
process.stdin.pipe(stream)
