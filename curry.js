const f = method => {
  if (method === 'add') {
    return a => b => a + b;
  }

  if (method === 'multiply') {
    return a => b => a * b;
  }
};

console.log(f('add')(3)(7));