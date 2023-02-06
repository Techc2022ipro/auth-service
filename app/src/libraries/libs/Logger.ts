import { format, transports, createLogger, addColors } from 'winston';
const { combine, timestamp, printf, colorize } = format;
//tst
const level = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? 'warn' : 'debug';
};

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  debug: 'black'
};

addColors(colors);

const date = () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo', hour12: false });

const commonFormat = combine(
  colorize({all:true}),
  timestamp({ format:date }),
  printf(
    info => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

const commonTransport =[ new transports.Console() ];

const Logger = createLogger(
  {
    level: level(),
    levels,
    format: commonFormat,
    transports: commonTransport
  }
);

export default Logger;
