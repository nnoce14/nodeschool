module.exports = function duckCount(...objects) {
    return objects.reduce((prev, curr) => {
        console.log(curr)
        if (Object.prototype.hasOwnProperty.call(curr, 'quack')) return prev + 1
        else return prev
    }, 0)
}