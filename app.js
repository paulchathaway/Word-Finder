var fs = require('fs')
try {
    var word = require('./word.js')(fs, process.argv[2])

    var header =
        '\n' +
        '############################\n' +
        'Word Unscrambler and Finder V1\n' +
        '(ported from C# to Javascript)\n' +
        'note, * denotes an exact match\n' +
        '############################'
    console.log(header)
    console.log(word)
}
catch (e) {
    console.log(
        'Uhh oh, did you remember to add an argument? You\'d better try again\n' +
        '(e.g. \'node app.js example\')')
}