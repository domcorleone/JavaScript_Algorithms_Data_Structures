let repeatNum = "100 100 100";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let result = reRegex.test(repeatNum);
console.log(result);
console.log(repeatNum.match(reRegex));