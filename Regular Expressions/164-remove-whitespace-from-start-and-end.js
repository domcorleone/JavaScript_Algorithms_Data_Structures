let hello = "   Hello, World!  ";
let wsRegex = /\w+,\s\w+!/; // Change this line
let result = hello.match(wsRegex)[0]; // Change this line
console.log(wsRegex.test(hello));
console.log(result);