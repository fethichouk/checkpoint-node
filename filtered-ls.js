// const fs=require('fs');

// fs.readdir(process.argv[2] ,'utf8',(err,files)=>{
//     if(err) console.log(err)
//   const filtred=  files.filter(el=>el.slice(-3) == process.argv[2].slice(-3) )
//   console.log(filtred)
// })

const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder,  (err, files)=> {
  if (err) return console.error(err)
  files.forEach((file)=> {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})