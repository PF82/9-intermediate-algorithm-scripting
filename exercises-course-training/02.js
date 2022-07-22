// 2-Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
Check two arrays and return a new array that contains only the items that are not in either of the original arrays.

Relevant Links
for Loop (Devdocs) 
Array.prototype.includes (Devdocs) 
Array.prototype.filter (Devdocs) 
Array.prototype.concat (Devdocs)

Hints
Hint 1
Merge the list to make it easy to compare functions.

Hint 2
Use filter to get the new array, you will need to create a callback function.

Hint 3
The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.

Solutions
function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

Code Explanation
Read the comments in the code.

Relevant Links
for Loop (Devdocs)
*/