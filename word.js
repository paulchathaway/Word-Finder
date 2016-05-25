module.exports = (fs, word) => {
    var output = []

    var wordList = require('./read.js')(fs)

    var compare

    wordList.forEach(function (str) {
        if (str != '')
            compare = findWords(word, str)
        else
            compare = 'none'

        switch (compare) {
            case 'exact':
                output.push('*' + str)
                break;
            case 'contains':
                output.push(str)
                break;
            default:
                break;
        }

    }, this)
    return output

};


function findWords(input, currentWord) {
    var str1 = alphabetize(input.toLowerCase())
    var str2 = alphabetize(currentWord)
    var out = 'contains'

    //Exact Match
    if (str1 == str2) {
        out = 'exact'
    }
    else if (str2.length >= str1.length) {
        out = 'none'
    }
    else {
        [...str2].forEach(function (e) {
            if (str1.indexOf(e) == -1) {
                out = 'none'
            }
            else {
                str1 = str1.replace(e,'')
            }
        }, this);
    }

    return out


}

function alphabetize(s) {
    var a = [...s]
    a.sort()
    return a.join('')
}