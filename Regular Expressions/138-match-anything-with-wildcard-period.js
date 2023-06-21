let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
/* using wild card or dot or period to match many character as possible within a string */
console.log(result);