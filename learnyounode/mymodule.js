const fs = require('fs')
const path = require('path')

module.exports = function(dirname, ext, callback) {
    fs.readdir(dirname, (err, files) => {
        if (err) return callback(err)
        callback(null, files.filter(file => path.extname(file) === '.' + ext))
    })
}