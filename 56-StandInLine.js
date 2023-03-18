function nextInLine(arr, item) {
    // Only change code below this line
    let returnValue = 0;
    if (arr.length > 0){
        console.log("The array length is "+ arr.length);
        if (!isNaN(item)){
            console.log("The item "+item + " is a valid number");
            arr.push(item);
            console.log(arr);
            item = arr.shift();          
        }
    }
    
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 5));
  console.log("After: " + JSON.stringify(testArr));