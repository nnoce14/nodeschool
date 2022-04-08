const { spawn } = require('child_process')
const duplexer2 = require('duplexer2')

module.exports = function (cmd, args) {
    const process = spawn(cmd, args)
    return duplexer2(process.stdin, process.stdout)
}