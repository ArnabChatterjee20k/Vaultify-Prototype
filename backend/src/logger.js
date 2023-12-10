const { createLogger, transports, format } = require("winston");

const errorLogger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "logs/error.log",
    }),
  ],
});

const activityLogger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "logs/activity.log",
    }),
  ],
});

module.exports = {errorLogger,activityLogger};
