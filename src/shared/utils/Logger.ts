class Logger {
  private logMessage = (message: string, type: string) => {
    const now = new Date().toLocaleString();

    console[type](`[${now}] ${message}`);
  };

  log = (message: string, description?: string) => {
    this.logMessage(` ๐คจ ${message} ${description ? description : ''}`, 'log');
  };

  warn = (message: string, description?: string) => {
    this.logMessage(` ๐ฐ ${message} ${description ? description : ''}`, 'warn');
  };

  info = (message: string, description?: string) => {
    this.logMessage(` ๐ง ${message} ${description ? description : ''}`, 'info');
  };
}

export default new Logger();
