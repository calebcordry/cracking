process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split('\n');
  main();    
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// input parsing above this line ////////////////////

function main() {
  const [n, k] = readLine().split(' ').map(Number);
  const days = readLine().split(' ').map(Number);

  upvotes(n, k, days);
}

function upvotes(n, k, days) {
  let start = 0;
  let stop = k - 1;
  let nonDecreasing = 0;
  let nonIncreasing = 0;

  for (let i = start; i < stop - 1; i++) {
    if ()
  }
}


const n = 5;
const k = 3;
const days = [1, 2, 3, 1, 1];

upvotes(n, k, days);