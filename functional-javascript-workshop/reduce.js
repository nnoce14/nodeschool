module.exports = function countWords(inputWords) {
    return inputWords.reduce(function(words, word) {
        if (word in words) {
            words[word]++
        } else {
            words[word] = 1
        }
        return words
    }, {})
}