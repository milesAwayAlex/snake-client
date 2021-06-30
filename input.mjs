// conn.on('connect', () => conn.write('Move: up'));

/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleInput);
  return stdin;
};

const handleInput = key => {
  if (key === '\u0003') {
    process.stdout.write('laika come home\n');
    process.exit();
  }
};

export default setupInput;
