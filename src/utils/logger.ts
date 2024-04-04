

export interface LogFn {
  (...args: any[]): void;
}

/** Basic logger interface */
export interface Logger {
  log: LogFn;
  warn: LogFn;
  error: LogFn;
}

/** Log levels */
export type LogLevel = 'log' | 'warn' | 'error';

const NO_OP: LogFn = () => {console.log("")};

/** Logger which outputs to the browser console */
export class ConsoleLogger implements Logger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor(options?: { level?: LogLevel }) {
    const { level } = options ?? {};

    this.error = console.error.bind(console);

    if (level === 'error') {
      this.warn = NO_OP;
      this.log = NO_OP;
      return;
    }

    this.warn = console.warn.bind(console);

    if (level === 'warn') {
      this.log = NO_OP;
      return;
    }

    this.log = console.log.bind(console);
  }
}
const logger: Logger = new ConsoleLogger({ level: 'log' });

export default logger;