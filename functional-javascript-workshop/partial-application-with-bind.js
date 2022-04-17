const slice = Array.prototype.slice

module.exports = function logger(namespace) {
    return console.log.bind(null, slice.call(arguments).join(' '))
}