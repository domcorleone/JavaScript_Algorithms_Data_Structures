/*
The equality operator '==' tends to convert when comparing
two values of different types (i.e. number and string), like we show as follow:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

*/

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);