import ClientClass from '../../lib/ts/client';

const Client = new ClientClass();

Client.emit().then(
    (result) => {
      console.log(result);
    }
);