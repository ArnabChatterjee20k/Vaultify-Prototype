import { createLogger, transports, format } from "winston";

export const errorLogger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "logs/error.log",
    }),
  ],
});

export const activityLogger = createLogger({
  level: "debug",
  format: format.json(),
  transports: [
    new transports.File({
      filename: "logs/activity.log",
    }),
  ],
});
