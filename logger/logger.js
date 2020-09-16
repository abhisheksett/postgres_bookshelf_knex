const winston = require('winston');

const consoleTransport = new winston.transports.Console()
const options = {
    transports: [consoleTransport]
}

const logger = new winston.createLogger(options);

module.exports=logger;