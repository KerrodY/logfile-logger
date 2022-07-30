const fs = require('fs')
const dateTime = require('./DateTime')
module.exports = {

    console(message) {
        console.log(dateTime.getDateTime() + message)
    },

    file (message, logfile = 'logs.txt', encode = 'utf8') {
        fs.appendFile(logfile, dateTime.getDateTime() + message + '\n', { encoding: encode }, (err) => {
            return console(`ERROR SAVING TO LOGFILE ${logfile} : ${err}`)
        });
    },

    everywhere (message, logfile = 'logs.txt', encode = 'utf8') {
        fs.appendFile(logfile, dateTime.getDateTime() + message + '\n', { encoding: encode }, (err) => {
            return this.console(`ERROR SAVING TO LOGFILE ${logfile} : ${err}`)
        }); 
        console.log(dateTime.getDateTime() + message + '\n    -> logged @ ' + logfile + '\n')
    }
}

