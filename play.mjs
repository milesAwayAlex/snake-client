import connect from './client.mjs';
import setupInput from './input.mjs';

console.log('Connecting ...');
const conn = connect(process.argv[2] || 'localhost', process.argv[3] || 50541);
conn.on('connect', () => {
  console.log('\nSucessfully connected!');
  conn.write('Name: AX');
});
setupInput();
