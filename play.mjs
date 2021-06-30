import connect from './client.mjs';
import setupInput from './input.mjs';

console.log('Connecting ...');
const conn = connect(
  process.argv[2] || '135.23.223.133',
  process.argv[3] || 50542
);
conn.on('connect', () => {
  console.log('\nSucessfully connected!');
  conn.write('Name: AX');
});
setupInput(conn);
