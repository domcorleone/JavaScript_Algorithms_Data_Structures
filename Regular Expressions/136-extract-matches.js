let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr; // Change this line
result = extractStr.match(codingRegex);
console.log(result);