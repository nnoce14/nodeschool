module.exports = function map(arr, fn) {
    return arr.reduce((prev, curr) => {
        prev.push(fn(curr))
        return prev
    }, [])
}