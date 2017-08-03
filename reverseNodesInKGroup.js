const makeArrayIntoList = require('./makeArrayIntoList');

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

function reverseNodesInKGroups(l, k) {

  const helper = head => {
    let current = l;
    let count = 0;

    while(current && count !== k) {
      current = current.next;
      count++;
    }

    if (count === k) {
      current = reverseNodesInKGroups(current);

      while(count) {
        const tmp = head.next; 
        head.next = current;
        current = head; 
        head = tmp; 
      }

      head = current;
    }

    return head;
  };
  
  return helper(l);
}


const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const k = 3;

const result = reverseNodesInKGroups(l, k);
console.log(result);

// public ListNode reverseKGroup(ListNode head, int k) {
//     ListNode curr = head;
//     int count = 0;
//     while (curr != null && count != k) { // find the k+1 node
//         curr = curr.next;
//         count++;
//     }
//     if (count == k) { // if k+1 node is found
//         curr = reverseKGroup(curr, k); // reverse list with k+1 node as head
//         // head - head-pointer to direct part, 
//         // curr - head-pointer to reversed part;
//         while (count-- > 0) { // reverse current k-group: 
//             ListNode tmp = head.next; // tmp - next head in direct part
//             head.next = curr; // preappending "direct" head to the reversed list 
//             curr = head; // move head of reversed part to a new node
//             head = tmp; // move "direct" head to the next node in direct part
//         }
//         head = curr;
//     }
//     return head;
// }

