/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
  if (minutesToDie > minutesToTest) { return; }
  let states = minutesToTest / minutesToDie + 1;
  
  return Math.ceil(Math.log(buckets) / Math.log(states));
};

poorPigs(1,1,1)