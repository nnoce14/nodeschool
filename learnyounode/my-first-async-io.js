const fs = require('fs')

let lineCount

function getFileContents(callback) {
    fs.readFile(process.argv[2], 'utf-8', function doneReading(err, fileContents) {
        lineCount = fileContents.split('\n').length - 1
        callback()
    })
}

function logLineCount() {
    console.log(lineCount)
}

getFileContents(logLineCount)