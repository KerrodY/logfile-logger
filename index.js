const fs = require('fs')

module.exports = {

    console(message) {
        console.log(`LOGGER: ${message}`)
    },

    file (message, logfile = 'logs.txt', encoding = 'utf8') {
        fs.appendFile(logfile, `${message}\n`, { encoding: encoding }, (err) => {
             `ERROR SAVING TO LOGFILE ${logfile} : console.log(err)`
        });
    },

    everywhere (message, logfile = 'logs.txt', encoding = 'utf8') {
        fs.appendFile(logfile, `${message}\n`, { encoding: encoding }, (err) => {
            return `ERROR SAVING TO LOGFILE ${logfile} : console.log(err)`
        });
        console.log(`${message} | logged in: ${logfile}`)
    }
}

