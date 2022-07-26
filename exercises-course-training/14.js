
// 14-Smallest Common Multiple
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the 
range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);


console.log(smallestCommons([1, 5]))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended 
to more than two numbers as well.

We can first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until 
we write a multiple that exists from both numbers.

An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The 
first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.

An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple 
of 4 by 3.

Be careful - do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the 
numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.

Relevant Links
Least (Smallest) Common Multiple
Greatest Common Divisor 

Hints
Hint 1
You can use remainder operator (%) to check if the reminder of a division is 0, which means it is evenly divisible.

Solution
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);

In this solution, we check every multiple of the largest value in the range until we find a value that is divisible by every value in the range.

The upper bound for this loop is the product of all values in the provided range, because this number will be divisible by every value in the range.
*/