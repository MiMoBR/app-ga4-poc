class Logger {
  private logMessage = (message: string, type: string) => {
    const now = new Date().toLocaleString();

    console[type](`[${now}] ${message}`);
  };

  log = (message: string, description?: string) => {
    this.logMessage(` 🤨 ${message} ${description ? description : ''}`, 'log');
  };

  warn = (message: string, description?: string) => {
    this.logMessage(` 😰 ${message} ${description ? description : ''}`, 'warn');
  };

  info = (message: string, description?: string) => {
    this.logMessage(` 🧐 ${message} ${description ? description : ''}`, 'info');
  };
}

export default new Logger();
