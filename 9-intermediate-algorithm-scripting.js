// 1-SUM ALL NUMBERS IN A RANGE
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

// 2-DIFF TWO ARRAYS
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
 
Solution
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

// 3-SEEK AND DESTROY
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

// 4-WHEREFORE ART THOU
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name 
and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", 
last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first 
  argument), because it contains the name and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
        obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))

/*
Problem Explanation
Write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties 
and values in the Object passed as second parameter.
 
Relevant Links
For Loops 
Array.prototype.filter() 
Object.hasOwnProperty() 
Object.keys() 
 
Hints
Hint 1
You may use for loop or the Array.prototype.filter method.
 
Hint 2
Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).
 
Hint 3
Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.
 
Solution
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);
 
  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
 
// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
 
Code Explanation
We filter through the array using .filter().
Using a for loop we loop through each item in the object.
We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
We return false if the above if statement is correct. Otherwise, we return true;
 
Relevant Links
For Loops
Array.prototype.filter()
Object.hasOwnProperty() 
*/

// 5-SPINAL TAP CASE
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

console.log(spinalCase('This Is Spinal Tap'))

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
 
Solution
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

// 6-PIG LATIN
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");

console.log(translatePigLatin("consonant"))

/*
Problem Explanation
You need to create a program that will translate from English to Pig Latin. Pig Latin takes the first consonant (or consonant cluster) of an 
English word, moves it to the end of the word and suffixes an “ay”. If a word begins with a vowel you just add “way” to the end. It might not 
be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.
 
Relevant Links
Pig Latin 
JS String Prototype Match 
 
Hints
Hint 1
You will probably want to use regular expressions. This will allow you to convert the words easily.
 
Hint 2
If the first character is a vowel, then take that whole word and add ‘way’ at the end. Otherwise comes the tricky part, take the consonant(s) 
before the first vowel and move it to the end and add ‘ay’. This might be confusing but, it is not just the first consonant but all of them 
before the first vowel.
 
Hint 3
You will need to use everything you know about string manipulation to get the last part right. However, it can be done with substr alone.
 
Solution
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}
 
translatePigLatin("consonant");
 
Code Explanation
start at beginning and get longest match of everything not a vowel (consonants)
 
if regex pattern found, it saves the match; else, it returns null
 
if regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds “ay” to the end
 
if regex pattern not found (starts with vowels), it just adds “way” to the ending
 
Relevant Links
Regex Match 
Ternary Operator 
concat()
*/

// 7-SEARCH AND REPLACE
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word 
Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

/*
Problem Explanation
You will create a program that takes a sentence, then search for a word in it and replaces it for a new one while preserving the uppercase 
if there is one.
 
Relevant Links
String global object 
JS String Prototype Replace 
 
Hints
Hint 1
Find the index where before is in the string.
Hint 2
Check first letter case.
Hint 3
Strings are immutable, you will need to save the edits on another variable, even if you must reuse the same one just to make it look like the 
changes where done using just that one variable.
 
Solution
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);
 
  return str;
}
 
// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
 
Code Explanation
Use indexOf() to find location of before in string.
If first letter of before is capitalized, change first letter of after to uppercase.
Replace before in the string with after.
Return the new string.
 
Relevant Links
JS String Prototype IndexOf 
JS String Prototype ToUpperCase 
JS String Prototype CharAt 
JS String Prototype Slice 
*/

// 8-DNA PAIRING
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks 
of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each 
character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function (char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };

  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }

  return paired;
}

pairElement("GCG");

console.log(pairElement("GCG"))

/*
Problem Explanation
You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided 
strand should be first always.
 
Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always 
paired together, and “G” and “C” are always paired together.
This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
The number of elements in the final output equals the number of characters in the input.
 
This problem does not involve rearranging the input into different combinations or permutations.
 
Relevant Links
Array.push() 
String.split() 
 
Hints
Hint 1
There are two base case, A-T and C-G, these go both way. You can use regular expression, if statements of anything that you can think of.
Hint 2
I would recommend using a switch, as it makes things a lot smoother.
Hint 3
The result must be an array of arrays, so keep that in mind when pushing things.
 
Solution
function pairElement(str) {
  // Function to match each character with the base pair
  let matchWithBasePair = function(char, pairedArray) {
    switch (char) {
      case "A":
        pairedArray.push(["A", "T"]);
        break;
      case "T":
        pairedArray.push(["T", "A"]);
        break;
      case "C":
        pairedArray.push(["C", "G"]);
        break;
      case "G":
        pairedArray.push(["G", "C"]);
        break;
    }
  };
 
  // Find pair for every character in the string
  const paired = [];
  for (let i = 0; i < str.length; i++) {
    matchWithBasePair(str[i], paired);
  }
 
  return paired;
}
 
// test here
pairElement("GCG")
 
Code Explanation
The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using 
if statements would take too much code. You could also use Regular Expressions.
 
Since we have to the original and the pair, I decided to take all four cases instead of the base two.
 
Create an empty array and use the search function to push the right values to the array and return them.
 
Relevant Links
Switch Statements 
*/

// 9-MISSING LETTERS
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);
    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

console.log(fearNotLetter("abce"))

/*
Problem Explanation
You will create a program that will find the missing letter from a string and return it. If there is no missing letter, the program should 
return undefined. There is currently no test case for the string missing more than one letter, but if there was one, recursion would be used. 
Also, the letters are always provided in order so there is no need to sort them.
 
Relevant Links
String global object 
JS String Prototype CharCodeAt 
String.fromCharCode
 
Hints
Hint 1
You will need to convert from character to ASCII code using the two methods provided in the description.
 
Hint 2
You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.
 
Hint 3
You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific 
return value.
*/

//Solution
//function fearNotLetter(str) {
//for (var i = 0; i < str.length; i++) {
/* code of current character */
//var code = str.charCodeAt(i);

/* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
//if (code !== str.charCodeAt(0) + i) {
/* if current character has escaped one character find previous char and return */
//return String.fromCharCode(code - 1);
//}
//}
//return undefined;
//}

// test here
//fearNotLetter("abce");

/*
Code Explanation
This solutions makes use of a for loop.
Code of encountered character is stored in code.
It is checked if code of current character is the expected one(no characters are skipped) by using the logic - code of current 
character = code of first character + number of iterations.
If a character is missing, the missing character is found and the final string is returned.
undefined is returned if there is no missing character in the string.
 
Relevant Links
JS For Loops Explained 
String.length
*/

// 10-SORTED UNION
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  const finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

/*
Problem Explanation
The program has to return a new array of unique values from two original arrays in the order they show up. So there is not sorting required, 
and there shouldn’t be any duplicates.

Relevant Links
JS Arguments 

Hints
Hint 1
Since you have no idea how many parameters were passed, it would be best to loop through the arguments before looping through the arrays.

Hint 2
It isn’t necessary to use loops. You can use functions such as map(), reduce() or others if you want.

Hint 3
You will have to check if the current value is already on the array to be returned for every value.

Solution
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  const finalArray = [];

  // Loop through the arguments object to truly make the program work with two or more arrays
  // instead of 3.
  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    // Loops through the array at hand
    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

Code Explanation
Create empty array finalResult to store the final result.
Loop through the arguments object in the outer loop and store it in arrayArguments.
The inner loop is used to loop through individual array elements.
If the element doesn’t already exist in finalArray, add it.
Return finalArray.

Relevant Links
JS For Loops Explained 
array.length 
JS String Prototype IndexOf 
JS Array Prototype Push 
*/

// 11-CONVERT HTML ENTITIES
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

// 12-SUM ALL ODD FIBONACCI NUMBERS
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

// 13-SUM ALL PRIMES
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it 
is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);

console.log(sumPrimes(10))

/*
Problem Explanation
For this problem will find all prime numbers up to the number you are given as a parameter and return their sum. It is a good idea to 
research algorithms for finding prime numbers.

Relevant Links
Prime numbers 

Hints
Hint 1
You can use the definition of prime numbers 4.3k or try learning and implementing your own Sieve of Eratosthenes 5.0k. Check this link 4.9k 
to see a StackOverflow discussion on various ways of finding prime numbers.

Hint 2
This problem can be hard if you create your own code to check for primes, so don’t feel bad if you use someone’s algorithm for that part. 
Research is an important part of coding!

Solution
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

Code Explanation
We loop over all values in our range, adding them to the sum if they are prime.
Our primality checking function returns false if the target number is divisible by any number in between 2 and the square root of the 
target number. We only need to check up to the square root because the square root of a number is the largest possible unique divisor.
*/


// 14-SMALLEST COMMON MULTIPLE
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

// 15-DROP IT
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

// 17-BINARY AGENTS
/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

/*
Problem Explanation
This problem is very straight forward - you start with a string that represents a sentence in binary code, and you need to translate that into 
words. There is not a direct way to do this so you will have to translate twice.

Relevant Links
String.prototype.charCodeAt 
String.fromCharCode 

Hints
Hint 1
You should first convert from binary to decimal before translating those values into characters.

Hint 2
Things are easier when focusing on smaller parts, divide the input to focus on one letter at a time.

Hint 3
Make sure that each time you transcode a character from binary to decimal, you reset whatever variable you used to keep track of the ones. Also 
do not forget to turn everything back into one string.

Solution
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/
/*
for (var i = 0; i < biString.length; i++) {
  uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
}

// we then simply join the string
return uniString.join("");
    }

// test here
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

    Code Explanation
    Separate the string into an array of strings separated by whitespace.
    Create some variables that you will use along the way - the names are self explanatory for the most part.
    Iterate through each binary string in the new array.
    Convert to decimal by using parseInt(_binary_, 2).Use the second parameter to specify the base of the input numbers.
    At the end, return the converted message.

    Relevant Links
String.prototype.split 
parseInt 
*/

// 18-EVERYTHING BE TRUE
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true 
if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, {
  name: "Camperbot", role: "Bot",
  isBot: true
}], "isBot");

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, {
  name: "Camperbot",
  role: "Bot", isBot: true
}], "isBot"))

/*
Problem Explanation
The program needs to check if the second argument is a truthy 3.7k element, and it must check this for each object in the first argument.

Relevant Links
JavaScript Truthy
JavaScript Arguments 

Hints
Hint 1
Remember to iterate through the first argument to check each object.

Hint 2
Only if all of them are truthy will we return true, so make sure all of them check.

Hint 3
You could use loops or callback functions, there are multiple ways to solve this problem.

Solution
Using for-in loop & hasOwnProperty

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", 
isBot: true }], "isBot");

Code Explanation
First I create a counter to check how many cases are actually true.
Then check for each object if the value is truthy
Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, 
otherwise, return false

Relevant Links
JS Loops 
Object.prototype.hasOwnProperty()
*/

// 19-ARGUMENTS OPTIONAL
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one 
argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof (first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof (second) !== "number")
    return undefined;
  return first + second;
}

addTogether(2, 3);

console.log(addTogether(2, 3))

/*
Problem Explanation
It can be quite complicated to understand what needs to be done. There are always many ways to do something when coding but regardless of 
the algorithm used, we have to create a program that does the following:

It has to add two numbers passed as parameters and return the sum.
It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
It has to check if it has one or two arguments passed. More are ignored.
If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

Relevant Links
Typeof 
Arguments Object 

Hints
Hint 1
Every time you deal with an argument, you have to check if it is defined and if it is a number.

Hint 2
When working on the case that it needs to return a function, using closure can help you write the new function in terms of addTogether().

Hint 3
The early return pattern can simplify your code.

Solution
function addTogether() {
const [first, second] = arguments;
if (typeof(first) !== "number")
  return undefined;
if (second === undefined)
  return (second) => addTogether(first, second);
if (typeof(second) !== "number")
  return undefined;
return first + second;
}
*/

// 20-MAKE A PERSON
/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it 
has to be a string. These methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();

console.log(bob.getFullName())

/*
Problem Explanation
When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating 
them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too 
which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier 
to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect 
but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.

Relevant Links
Closures 
Details of the Object Model 


Hints
Hint 1
Use the this notation to create the keys instead of regular functions: This means instead of var varName = function() {/*...*///} you should use 
//this.varName = function() {/*...*/}
/*
Hint 2
The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means 
if you need to work with variables, make them local and not a key: this.fullName = firstAndLast;

Hint 3
Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens 
to all of us at some point.

Hint 4
If you are having problems with writing the setter methods, below is a template for a set method:

this.setFullName = function(input) {
// Insert your code here
};
*/

/*
Solution
var Person = function(firstAndLast) {
let fullName = firstAndLast;

this.getFirstName = function() {
  return fullName.split(" ")[0];
};

this.getLastName = function() {
  return fullName.split(" ")[1];
};

this.getFullName = function() {
  return fullName;
};

this.setFirstName = function(name) {
  fullName = name + " " + fullName.split(" ")[1];
};

this.setLastName = function(name) {
  fullName = fullName.split(" ")[0] + " " + name;
};

this.setFullName = function(name) {
  fullName = name;
};
};

var bob = new Person("Bob Ross");
bob.getFullName();

Code Explanation
Create a variable that will make a copy of the full name that was passed as a parameter.
Then we can proceed to create the six methods needed and return what is asked for.
For the individual setters, we can use the split to turn the fullname into an array of first and last names and concatenate the unchanged portion 
of the name with what was passed as a parameter.

Relevant Links
Build javascript objects 
Define a constructor function 
Declare javascript variables 
*/

// 21-MAP THE DEBRIS
/*
According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other in a circular or elliptic orbit is:

T=2πa3μ−−−√
 
a  is the orbit's semi-major axis
μ=GM  is the standard gravitational parameter
G  is the gravitational constant,
M  is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function (obj) {
      const c = Math.pow(earthRadius + obj.avgAlt, 3);
      const b = Math.sqrt(c / GM);
      const orbPeriod = Math.round(a * b);
      // create new object
      return { name: obj.name, orbitalPeriod: orbPeriod };
  };

  for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))

/*
Problem Explanation
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is. You’ve to return 
a new array that transforms the element’s average altitude into their orbital periods. The parts generally found hard are finding the 
formula, implementing it and for some people, modifying objects by the key. However, something that is not very clear is the fact that 
your program has to be able to check for any number of objects in the array; This is what is tested on the second part.

Relevant Links
Orbital period
JS Objects 
Math.PI 
JS Math Pow 
Math.sqrt() 
Math.round() 

Hints
Hint 1
The formula needed is:
image

Hint 2
Use Math.round() to round up to the next whole number as requested. Using Math.ceil() will let you pass the first test but fail the second one.

Hint 3
Find out how to remove and add key to a JavaScript object.

Solution
function orbitalPeriod(arr) {
const GM = 398600.4418;
const earthRadius = 6367.4447;
const a = 2 * Math.PI;
const newArr = [];

const getOrbPeriod = function(obj) {
  const c = Math.pow(earthRadius + obj.avgAlt, 3);
  const b = Math.sqrt(c / GM);
  const orbPeriod = Math.round(a * b);
  // create new object
  return {name: obj.name, orbitalPeriod: orbPeriod};
};

for (let elem in arr) {
  newArr.push(getOrbPeriod(arr[elem]));
}

return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

Code Explanation
GM and earthRadius are both given to us.
To make the code easier to edit and read, each part of the equation is written separately.
Create newArr to store the orbPeriod's.
a is 2 times pi. The part that is a constant is on the global scope while the rest is part of a function.
Create a function, gerOrbPeriod() that will do the required work for any amount of objects.
c is (earthRadius + avgAlt) to the cube.
b is the square root of c divided by GM.
Create orbPeriod to store the product of a and b, with the Math.round() function applied to round up to the next whole number.
Then we delete the key avgAlt, and add the new key and its value.

Relevant Links
JS For In Loop 
JS Array Prototype Push 
*/
