// 1-Sum All Numbers in a Range
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest 
number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetweenThem = 0;
  for (let i = min; i <= max; i++) {
    sumBetweenThem += i;
  }
  return sumBetweenThem;
}

sumAll([1, 4]);


console.log(sumAll([1, 4]))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
You need to create a program that will take an array of two numbers who are not necessarily in order, and then add not just those 
numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1

Hints
Hint 1
Use Math.max() to find the maximum value of two numbers.

Hint 2
Use Math.min() to find the minimum value of two numbers.

Hint 3
Remember to that you must add all the numbers in between so this would require a way to get those numbers.

Solution
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);

Code Explanation
  First create a variable to store the max number between two.
  The same as before for the Smallest number.
  We create a accumulator variable to add the numbers.

Since the numbers might not be always in order, using max() and min() will help organize.

Relevant Links
Math.max() 
Math.min() 
For Loops 
*/