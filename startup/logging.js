const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');



module.exports = function () {
    winston.exceptions.handle(new winston.transports.File({ filename: 'uncaughtExceptions.log' }));

    process.on('unhandledRejection', ex => {
        throw ex;
    });


    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.add(new winston.transports.MongoDB({
        db: 'mongodb://localhost/vidly',
        level: 'info'
    }));

}






// process.on('uncaughtException', ex => {
//     winston.error(ex.message, ex);
//     process.exit(1);
// });
// process.on('unhandledRejection', ex => {
//     winston.error(ex.message, ex);
//     process.exit(1);
// });

// throw new Error('somtethig went wrong');