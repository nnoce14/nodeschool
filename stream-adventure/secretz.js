const crypto = require('crypto')
const tar = require('tar')
const through = require('through')

const parser = new tar.Parse()
parser.on('entry', function (entry) {
  if (entry.type !== 'File') return entry.resume();

  const hash = crypto.createHash('md5', { encoding: 'hex' })
  entry.pipe(hash).pipe(through(md5 => process.stdout.write(md5 + ' ' + entry.path + '\n')))
})

const cipher = process.argv[2]
const key = process.argv[3]
const iv = process.argv[4]

process.stdin
    .pipe(crypto.createDecipheriv(cipher, key, iv))
    .pipe(parser)


