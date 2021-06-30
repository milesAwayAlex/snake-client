import {createConnection} from 'net';

// establishes a connection with the game server
const connect = () => {
  const conn = createConnection({
    // host: // IP address here,
    // port: // PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', (err, data) => {
    console.log('err:', err, 'data:', data, '\nSucessfully connected!');
    conn.write('Name: AX');
  });
  conn.on('data', data => console.log('data:', data));

  return conn;
};

export default connect;
