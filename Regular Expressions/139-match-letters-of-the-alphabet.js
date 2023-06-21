let quoteSample = "The quick brown fox jumps over the lazy dog.";
/* Identify all the letters (include Upper and Lower case)
use 'g' to repeat or even better to find all character repeated character within a string;
use '-' to determine a range. e.g: check letters from 'a' to 'f'
let pattern = /[a-f]/;
*/
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result, result.length);