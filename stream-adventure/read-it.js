
const { Readable } = require('stream')

class ReadStream extends Readable {
    _read(size) {}
}

const stream = new ReadStream()
stream.push(process.argv[2])
stream.pipe(process.stdout)
