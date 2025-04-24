function extractAndReverse(arr) {
    
    let subArray = arr.slice(2, 5);  // [45, 60, 75]
    subArray.reverse();  // [75, 60, 45]
    return subArray;
  }
  
  const originalArray = [15, 30, 45, 60, 75, 90];
  const result = extractAndReverse(originalArray);
  
  console.log("Reversed Subarray:", result);  
  console.log("Original Array remains unchanged:", originalArray);  
  