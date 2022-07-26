// 11-Convert HTML Entities
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  // Split by character to avoid problems.
  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

convertHTML("Dolce & Gabbana");


console.log(convertHTML("Dolce & Gabbana"))
// document.getElementById("demo").innerHTML = "";

/*
Problem Explanation
You have to create a program that will convert HTML entities from string to their corresponding HTML entities. There are only a few so you 
can use different methods.

Hints
Hint 1
You can use regular Expressions however I didn’t in this case.
Hint 2
You will benefit from a chart with all the html entities so you know which ones are the right ones to put.
Hint 3
You should separate the string and work with each character to convert the right ones and then join everything back up.

Solution
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

Code Explanation
Assign temp to str.split(''), which creates an array containing each individual character in the passed in string.
Pass each character in the newly created array into a switch() statement.
Replace the HTML entities with their corresponding HTML entity string (i.e. '&' becomes '&amp;' in line 51)
temp.join('') converts the array of characters into a string to be returned.

Relevant Links
str.split() 
arr.join() 
switch statement 
*/