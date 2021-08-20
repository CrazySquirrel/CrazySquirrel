import CSLoggerClass from 'CSLogger.ts';

let CSLogger = CSLoggerClass({
  loggerUrl: 'http://localhost/',
  minLoggerLevel: 100,
  projectName: '',
  projectVersion: '',
});

CSLogger.log(100, 'Test message');