const http = require('http')
const bl = require('bl')

let allData = []
let count = 0

function printData() {
    allData.forEach(i => console.log(i))
}

function httpGet(index) {
    http.get(process.argv[2+index], (res) => {
        res.pipe(bl(function (err, data) {
            if (err) return console.error(err)
            allData[index] = data.toString()
            count++

            if (count === 3) printData()
        }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
}