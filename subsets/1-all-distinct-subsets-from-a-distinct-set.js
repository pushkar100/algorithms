// https://www.educative.io/courses/grokking-the-coding-interview/gx2OqlvEnWG

const find_subsets = function(nums) {
  let subsets = [[]];

  /* BFS */
  // Loop through the numbers:
  nums.forEach(num => {
    let additionalSets = [];
    // Loop through existing subsets to add 1 more element to each:
    subsets.forEach(subset => {
      additionalSets.push([...subset, num]);
    });
    // Update subsets with the new sets (pushed to the end):
    subsets = [...subsets, ...additionalSets];
    // Reset the additional sets:
    additionalSets = [];
  });

  return subsets;
};


console.log(`Here is the list of subsets:`, find_subsets([1, 3]))
console.log(`Here is the list of subsets:`, find_subsets([1, 5, 3]))

// TC = O(2^N)
// SC = O(2^N)
