
class Logger {

    fs = require('fs')

    console(message) {
        console.log(`LOGGER: ${message}`)
    }

    file (message, logfile = 'logs.txt', encoding = 'utf8') {
        fs.writeFile(logfile, `\n${message}`, { encoding: encoding }, (err) => {
             `ERROR SAVING TO LOGFILE ${logfile} : console.log(err)`
        });
    }
}

module.exports = Logger
