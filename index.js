//Reference : https://thisdavej.com/using-winston-a-versatile-logging-library-for-node-js/

const logger = require('./logger')(__filename);

logger.info('Hello world');
logger.debug('Debugging info');