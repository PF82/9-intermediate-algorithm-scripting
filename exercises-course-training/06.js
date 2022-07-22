// 6-Pig Latin
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
// document.getElementById("demo").innerHTML = "";

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