var findMedianSortedArrays = function(nums1, nums2) {
  const totalLen = nums1.length + nums2.length;
  const isOdd = totalLen % 2 !== 0;
  const numToMedian = (totalLen >> 1) + 1;
    
  let i = -1;
  let j = -1;
  let count = 0;
  let lastTwo = [null, null];
    
  while(i < nums1.length || j < nums2.length) {
    if (nums2[j + 1] === undefined || nums1[i + 1] <= nums2[j + 1]) {
      i++;
      lastTwo = [lastTwo[1], nums1[i]];
    } 
    else if (nums1[i + 1] === undefined || nums2[j + 1] < nums1[i + 1]) {
      j++;
      lastTwo = [lastTwo[1], nums2[j]];
    }
        
    count++;
    if (count === numToMedian) { 
      return isOdd ? lastTwo[1] : (lastTwo[0] + lastTwo[1]) / 2;
    }
  }
};

var findMedianSortedArrays = function(nums1, nums2) {
  const [one, two] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  const onePivot = one.length >> 1;
  const oneLeft = one.slice(0, onePivot);
  const oneRight = one.slice(onePivot);

  const twoPivot = two.length >> 1;
  const twoLeft = two.slice(0, twoPivot);
  const twoRight = two.slice(twoPivot);


  debugger;
}



const r = findMedianSortedArrays([1,2,3,4], [0,6,10]);
console.log(r)