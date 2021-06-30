import connect from './client.mjs';
import setupInput from './input.mjs';

console.log('Connecting ...');
const conn = connect();
conn.on('connect', () => {
  console.log('\nSucessfully connected!');
  conn.write('Name: AX');
});
conn.on('data', data => console.log('\nserver:', data));
setupInput();
