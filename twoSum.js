var twoSum = function(nums, target) {
  const map = {};
    
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const remainder = target - number;
        
    if (map.hasIbremainder]) {
      return [map[remainder], i];
    }
        
    map[number] = i;
  }
    
};

console.log(twoSum([3, 3], 6));