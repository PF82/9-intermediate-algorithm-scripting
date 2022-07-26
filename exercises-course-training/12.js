// 12-Sum All Odd Fibonacci Numbers
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous 
numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs(4);


console.log(sumFibs(4))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
You will need to gather all the Fibonacci numbers and then check for the odd ones. Once you get the odd ones then you will add them all. The 
last number should be the number given as a parameter if it actually happens to be an off Fibonacci number.

Relevant Links
Fibonacci number 

Hints
Hint 1
To get the next number of the series, you need to add the current one to the previous and that will give you the next one.

Hint 2
To check if a number is even all you have to check is if number % 2 == 0.

Hint 3
As you get the next odd one, don’t forget to add it to a global variable that can be returned at the end. result += currNumber; will do the trick.

Solution
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

// test here
sumFibs(4);

Code Explanation
Create a variable to keep record of the current and previous numbers along with the result that will be returned.
Use a while loop to make sure we do not go over the number given as parameter.
We use the modulo operand to check if the current number is odd or even. If it is odd, add it to the result.
Complete the Fibonacci circle by rotating getting the next number and swapping values after.
Return the result.

Relevant Links
JS while Loop
*/