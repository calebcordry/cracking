// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}

const add = (a, b) => {
  let carry = 0;
  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;

  let index = 1;
  let builder = '';

  while (index < shorter.length + 1) {
    let shortIndex = shorter.length - index;
    let longIndex = longer.length - index;

    let sum = Number(longer[longIndex]) + Number(shorter[shortIndex]) + carry;
    carry = sum >= 10 ? 1 : 0;
    sum %= 10;

    builder = sum + builder;
    index++;
  }

  while (carry && index <= longer.length) { 
    let longIndex = longer.length - index;
    let sum = Number(longer[longIndex]) + carry;
    carry = sum >= 10 ? 1 : 0;
    sum %= 10;
    builder = sum + builder;
    index++;
  }

  if(carry) {
    builder = carry + builder;
  }

  return longer.slice(0, Math.max(0, longer.length - builder.length)) + builder;
};

function addTwoHugeNumbers(a, b) {
  let aPoint = a;
  let bPoint = b;
   
  let aBuilder = '';
  let bBuilder = '';
   
  while(aPoint) {
    const str = aPoint.value.toString().padStart(4,'0');
    aBuilder += str;
    aPoint = aPoint.next;
  }
   
  while(bPoint) {
    const str = bPoint.value.toString().padStart(4,'0');
    bBuilder += str;
    bPoint = bPoint.next;
  }
   
  const sum = add(aBuilder, bBuilder);
   
  const chunks = [];
  for (let stop = sum.length; stop > 0; stop -= 4) {
    chunks.push(sum.slice(Math.max(0, stop - 4), stop));
  }
  
  chunks.reverse();
  const nums = chunks.map(Number);
   
  const head = new ListNode(nums[0]);
  let current = head;
   
  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]);
    current = current.next;
  }
   
  return head;
}

const a = new ListNode(1);
const b = new ListNode(9999);
b.next = new ListNode(9999);
b.next.next = new ListNode(9999);
b.next.next.next = new ListNode(9999);
b.next.next.next.next = new ListNode(9999);
b.next.next.next.next.next = new ListNode(9999);

const result = addTwoHugeNumbers(a, b);
console.log(result);