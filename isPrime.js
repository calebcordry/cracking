// function main() {
//     var p = parseInt(readLine());
//     for(var a0 = 0; a0 < p; a0++){
//         var n = parseInt(readLine());
//         const result = isPrime(n);
//         const word = result ? 'Prime' : 'Not Prime';
//         console.log(word);
      // }
// }

const isPrime = n => {
  if (n === 1) { return false; }

  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      return 'Not Prime';
    }
  }
  return 'Prime';
};

var input = `30
1
4
9
16
25
36
49
64
81
100
121
144
169
196
225
256
289
324
361
400
441
484
529
576
625
676
729
784
841
907`;

console.log(input.split('\n').map(Number).map(isPrime));