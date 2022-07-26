// 16-Steamroller
/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);


console.log(steamrollArray([1, [2], [3, [[4]]]]))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
This problem seems simple but you need to make sure to flatten any array, regardless of the level which is what adds a bit of difficulty to the problem.

Relevant Links
Array.isArray() 

Hints
Hint 1
You need to check if an element is an array or not.

Hint 2
If you are dealing with an array, then you need flatten it by getting the value inside of the array. This means if you have [[4]] then 
instead of returning [4] you need to return 4. If you get [[[4]]] then the same, you want the 4. You can access it with arr[index1][index2] to 
go a level deeper.

Hint 3
You will definitely need recursion or another way to go beyond two level arrays to make the code flexible and not hard-coded to the answers needed. 
Have fun!

Solution
function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

Code Explanation
Create a new variable to keep flattened arrays.
Loop over the elements of the array
If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the 
flattened array.
If the element is not an array, then push that non-array element to the flattened array.
Return the flattened array.

Relevant Links
Array.push() 
*/