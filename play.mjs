import connect from './client.mjs';
import setupInput from './input.mjs';
import {HOST, PORT} from './constants.mjs';

console.log('Connecting ...');
const conn = connect(process.argv[2] || HOST, process.argv[3] || PORT);
conn.on('connect', () => {
  console.log('\nSucessfully connected!');
  conn.write('Name: AX');
});
setupInput(conn);
