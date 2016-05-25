module.exports = (fs) => {
    var input = fs.readFileSync('words.txt').toString()

    var output = []

    var index

    while (input.indexOf('\n') != -1) {
        index = input.indexOf('\n')
        output.push(cleanEscape(input.substring(0, index)))
        input = input.substring(index + 1)

        if (input.indexOf('\n') == -1) {
            output.push(cleanEscape(input))
        }
    }
    
    return output;
}

function cleanEscape(str) {
    return str.replace('\n', '').replace('\r', '')
}