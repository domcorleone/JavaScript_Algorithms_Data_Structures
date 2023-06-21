let sampleWord = "lookaheads";
//let pwRegex = /(?=\w{5,}\d*)(?=\w{4,}\d{2})/; // Change this line
//let pwRegex = /(?=\w{6,})(?=\w{1,}\d{2})/;
let pwRegex = /(?=\w{6,})(?=\w+\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result);
console.log(sampleWord.match(pwRegex));