class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    this.refillIfNeeded();
    this.stack2.pop();
  }

  peek() {
    this.refillIfNeeded();
    console.log(this.stack2[this.stack2.length - 1]);
  }

  refillIfNeeded() {
    if (this.stack1.length && !this.stack2.length) {
      this.refill();
    }
  }

  refill() {
    let value = this.stack1.pop();
    while (value) {
      this.stack2.push(value); 
      value = this.stack1.pop();
    }
  }
}

const processData = (input) => {
  const lines = input.split('\n');
  const numberOfInputs = lines[0];

  const q = new Queue();

  for (let i = 1; i <= numberOfInputs; i++) {
    const line = lines[i];
    if (line[0] === '1') {
      const value = line.split(' ')[1];
      q.enqueue(value);
    }

    if (line[0] === '2') {
      q.dequeue();
    }

    if (line[0] === '3') {
      q.peek();
    }
  }
};



// const input = `10
// 1 42
// 2
// 1 14
// 3
// 1 28
// 3
// 1 60
// 1 78
// 2
// 2`;

const input = `10
1 76
1 33
2
1 23
1 97
1 21
3
3
1 74
3`;

processData(input);