const fs = require('fs');
const path= require('path');
module.exports = function (path, ext, callbk) {
const extn = "." + ext;
    fs.readdir(path, function (err, files) {
        if (err)
            return callbk(err);
        else {
            const listf = []; 
            for (let i = 0; i < files.length; i++) {
                if (path.extname(files[i]) === extn) {
                    listf.push(files[i]);
                }
 }
            callbk(null, listf);
     }

    });
}
