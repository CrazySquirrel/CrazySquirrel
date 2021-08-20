import ServerClass from '../../lib/ts/server';

const Server = new ServerClass();

// Listened event name and callback
Server.on('connect', (data) => {
  console.log(data);

  return 'OK';
});
