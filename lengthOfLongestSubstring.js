/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = {};
  let max = 0;

  let front = 0;
  let back = 0;
  while (front < s.length && back < s.length) {
    if (!map[s[back]]){
      map[s[back]] = true;
      back++;
      max = Math.max(max, back - front);
    }
    else {
      delete map[s[front]];
      front++;
    }
  }

  return max;
};

lengthOfLongestSubstring("abcabcbb");

// public class Solution {
//     public int lengthOfLongestSubstring(String s) {
//         int n = s.length();
//         Set<Character> set = new HashSet<>();
//         int ans = 0, i = 0, j = 0;
//         while (i < n && j < n) {
//             // try to extend the range [i, j]
//             if (!set.contains(s.charAt(j))){
//                 set.add(s.charAt(j++));
//                 ans = Math.max(ans, j - i);
//             }
//             else {
//                 set.remove(s.charAt(i++));
//             }
//         }
//         return ans;
//     }
// }