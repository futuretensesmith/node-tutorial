// os is a built in module
const os = require('os')
// desturcturing way would be below
// const {the specific property or variable you want} = require('os)

// info about current user
const user = os.userInfo()
console.log(user)

// uptime() method returns system uptime in seconds
console.log(`The system uptime is ${(os.uptime() / 60) / 60} days. `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)