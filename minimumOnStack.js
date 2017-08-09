function minimumOnStack(operations) {
  const stack = [];
  const result = [];

  for (let el of operations) {
    const [op, val] = el.split(' ');

    if (op === 'min') {
      if (!stack.length) { return; }
      result.push(stack[stack.length - 1][1]);
    }

      let min = stack.length ? stack[stack.length - 1][1] : Infinity;
      const num = Number(val);
      if ( num < min) {
        min = num;
      }
      stack.push([num, min]);
    }

    if (op === 'pop') {
      if (!stack.length) { return; }
      stack.pop();
      // const res = stack.pop()[0];
      // result.push(res);
    }
  }

  return result;
}


const operations = ['push 10', 'min', 'push 5', 'min', 'push 8', 'min', 'pop', 'min', 'pop', 'min'];
const res = minimumOnStack(operations);
console.log(res);
