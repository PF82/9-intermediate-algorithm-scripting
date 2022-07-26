// 15-Drop it
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

dropElements([1, 2, 3], function (n) { return n < 3; });


console.log(dropElements([1, 2, 3], function (n) { return n < 3; }))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
Basically while the second argument is not true, you will have to remove the first element from the left of the array that was passed as 
the first argument.

Relevant Links
Arguments object 
Array.shift() 
Array.slice() 

Hints
Hint 1
You can use Array.prototype.shift() or filter that you should be more familiar with to solve this problem in a few lines of code.

Hint 2
Shift returns the element that was removed which we don’t really need, all we need is the modified array that is left.

Hint 3
If you still can’t figure out how to solve it with shift, then try solving it with filter, and check how filter works, if you become familiar 
with it, then you can make the code with shift.

Solution
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

Code Explanation
Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns 
true. It also makes sure the array is not empty first to avoid infinite loops.
Return the filtered array.
*/