let petString = "Kara has a pet dolphin.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);
console.log(result);
