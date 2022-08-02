// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require('./3-names_modules')
// destructered way to bring names
// const {john, peter} = require('./3-names_modules')
const sayHi = require('./4-utils')
const data = require('./5-alternative_syntax')
require('./6-mind_grenade')
console.log(data)

// calling function with property names
// sayHi(names.peter)
// sayHi(names.john)