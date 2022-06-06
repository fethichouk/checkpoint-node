const fs = require('fs')
let file = fs.readFileSync(process.argv[2])

let tab=file.toString().split('\n')
console.log(tab.length -1)
