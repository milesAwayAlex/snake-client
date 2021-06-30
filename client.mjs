import {createConnection} from 'net';

// establishes a connection with the game server
const connect = (host, port) => {
  const conn = createConnection({
    host: host || 'localhost', // IP address here,
    port: +port || 50541, // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', data => console.log('\nserver:', data));
  return conn;
};

export default connect;
