const duplexer = require('duplexer2')
const through = require('through2')

module.exports = function (counter) {
    let countries = {}
    let duplex = duplexer(through.obj(function (obj, _, next) {
        countries[obj.country] = (countries[obj.country] || 0) + 1
        next()
    }), counter)

    duplex.on('finish', () => counter.setCounts(countries))

    return duplex
}