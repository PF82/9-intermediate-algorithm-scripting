// 5-Spinal Tap Case
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}
spinalCase('This Is Spinal Tap');

console.log()
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
Convert the given string to a lowercase sentence with words joined by dashes.

Relevant Links
String global object 
JS Regex Resources 
JS String Prototype Replace 
JS String Prototype ToLowerCase 

Hints
Hint 1
Create a regular expression for all white spaces and underscores.

Hint 2
You will also have to make everything lowercase.

Hint 3
The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace 
spaces with dashes using replace().

Solutions
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

Code Explanation
regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
While returning the string, another replace() replaces spaces and underscores with dashes using regex.
*/