const { readFileSync, writeFileSync } = require('fs')
console.log('start')
// non destructured way of require file
// const fs = require('fs')
// fs.readFileSync()

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// by default writeFileSynch overrides the file. the 'a' flag appends data to existing file.
writeFileSync('./content/result-sync.txt', `Here is the result :  ${first}, ${second}`
    , { flag: 'a' })
console.log('done with this task')
console.log('starting the next one')

// const writtenFile = readFileSync('./content/result-sync.txt', 'utf8')
// console.log(writtenFile)