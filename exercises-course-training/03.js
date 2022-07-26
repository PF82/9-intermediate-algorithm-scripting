// 3-Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all 
elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two or more but 
on the script you only see two. You will remove any number from the first argument that is the same as any other other arguments.

Relevant Links
Arguments object 
Array.filter() 

Hints
Hint 1
You need to work with arguments as if it was a regular array. The best way is to convert it into one.

Hint 2
You may want to use use various methods like: indexOf(), includes(), or filter(). When in doubt about any function, check those docs!

Solution
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

Code Explanation
1.Create an array of valsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. We’ll use this to 
check against arr.

2.Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to 
valsToRemove. This second loop will iterate through valsToRemove .

  Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].

  If the value at the current index is equal in both arrays, let removeElement to true remove it from arr.

  If the value is not flagged for removal, add it the the filteredArray.

3.Outside of the nested loops, return the filteredArray.

Relevant Links
Arguments Object
*/