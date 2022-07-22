// 8-DNA Pairing
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
// document.getElementById("demo").innerHTML = "";

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