// Should read from file which is passed in execution of file

const fs = require('fs')
file = process.argv[2]

fs.readFile(file, (err, data) => {
    if (err) {
        return console.log(`No such file exists ${file}`)
    }
        console.log(`Reading file: \n\n ${data.toString()}`)
})

console.log('test')   // Testing async code. 