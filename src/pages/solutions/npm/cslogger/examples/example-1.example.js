let CSLogger = require('CSLogger.js')({
  loggerUrl: 'http://localhost/',
  minLoggerLevel: 100,
  projectName: '',
  projectVersion: '',
});

CSLogger.log(100, 'Test message');