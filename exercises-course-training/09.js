// 9-Missing letters
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
// document.getElementById("demo").innerHTML = "";

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