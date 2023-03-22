/*
Generate Random Whole Numbers within a Range
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.

Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.


*/



function randomRange(myMin, myMax) {
    // Only change code below this line
    let rd = Math.random();
    console.log("Random number is: " + rd);
    let formula1 = myMax - myMin + 1;
    console.log("myMax - myMin + 1 is: " + formula1);
    let formula2 = Math.floor(rd * (formula1));
    console.log("Math.floor(rd * formula1) is:" + formula2);
    console.log("Formula2 + myMin is: " + (formula2 + myMin));
    return formula2 + myMin;
    // Only change code above this line
}

console.log(randomRange(10, 40));