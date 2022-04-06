const fs = require('fs')
const path = require('path')

const directory = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(process.argv[2], (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
        if (path.extname(file) === "." + process.argv[3]) {
            console.log(file)
        }
    })
})