const mod = require('./mymodule');
mod(process.argv[2], process.argv[3], function (err, listf) {
    if (err) {
        console.log('Error!')
    } else {
        for (let i = 0; i < listf.length; i++) {
            console.log(listf[i]);
        }
    }
});