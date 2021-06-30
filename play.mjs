import connect from './client.mjs';

console.log('Connecting ...');
const conn = connect();
conn.on('connect', () => {
  console.log('\nSucessfully connected!');
  conn.write('Name: AX');
});
conn.on('data', data => console.log('\nserver:', data));
// conn.on('connect', () => conn.write('Move: up'));

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/
