# Algorithmic Toolbox 

[Course: https://www.coursera.org/learn/algorithmic-toolbox](https://www.coursera.org/learn/algorithmic-toolbox)

[Specialisation: https://www.coursera.org/specializations/data-structures-algorithms](https://www.coursera.org/specializations/data-structures-algorithms)

## Week 1 Problems 

**Stress Testing Technique**
- Helps debug one solution by comparing it with another
- Keep two or more solutions (one you intend to use/submit, one brute force approach)
- Generate random inputs conforming to the criteria of the problem
- Run an infinite loop which generates the random input and runs the two functions
- Break whenever there is a mismatch in the outputs of the two approaches
- This means either one or both approaches were wrong
- Manually verify solution for that input and fix the appropriate function(s)
- If the while loop does not break, wait for a few seconds (say ~10s)
- After that force exit the execution (Ctrl-C)
- We can now be sure that our solution is correct
- Note: 
  - Make sure to test for the extremes of the input ranges (Esp. higher numbers)
  - Stress testing might take time to report a difference
  - This is because of corner cases (Ex: Occurrence of two same numbers)
  - When you are unable to find errors in stress test: Try to run the tests on a more focused input range
  - Example: Working with graphs? Generate disconnected graphs, bipartite graphs, cyclic graphs, etc

**Problem Solving Approach to Submit Solutions**
- Test on the examples from the problem statement. 
- Then make a few other small tests, solve them manually and check that your program outputs the correct answer. 
- Generate a big input and launch your program to check that it works fast enough and doesn't consume too much memory. 
- Test for corner cases: smallest allowed values and largest allowed values of all input parameters, equal numbers in the input, very long strings, etc.
- Then make a stress test. 
- After all these tests passed, submit the solution.

### 1. Maximum pairwise product

Given a sequence of numbers, determine the maximum pair product from it.

**Naive solution**

Multiply every number with every other number. During each iteration, replace the result with the current product of two numbers if it is more than it. We will have two for loops to multiply every number with every other number. Therefore, `TC = O(n^2)`

**Optimal Solution**

```javascript
function MaxPairwiseProduct(numbers) {
  var max = -1
  var secondMax = -1
  numbers.forEach(n => {
    if (n >= max) {
      secondMax = max
      max = n
    } else if (n > secondMax) {
      secondMax = n
    }
  })
  return max * secondMax
}
```
