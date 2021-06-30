/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/
let conn;

const setupInput = connection => {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleInput);
  return stdin;
};

const handleInput = key => {
  if (key === '\u0003') process.exit();
  else if (key === 't') conn.write('Move: up');
  else if (key === 's') conn.write('Move: down');
  else if (key === 'h') conn.write('Move: left');
  else if (key === 'n') conn.write('Move: right');
  else if (key === 'u') conn.write('Say: o_hai!..');
  else if (key === 'a') conn.write('Say: ima_snek');
  else if (key === 'o') conn.write('Say: so_wow_much_snek');
  else if (key === 'e') conn.write('Say: omnomnom');
};

export default setupInput;
