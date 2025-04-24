
// Method 1: Filters even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // Method 2: Calculates the sum of all elements in an array
  function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Method 3: Sorts two arrays and concatenates them
  function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.sort((a, b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);
    return sortedArr1.concat(sortedArr2);
  }
  
  // Example Input Arrays
  const array1 = [15, 30, 45, 60, 75];
  const array2 = [5, 10, 20, 25, 50];
  
  // Using the custom methods
  const evenNumbers = filterEvenNumbers(array1);
  const sumArray1 = sumOfArray(array1);
  const sortedAndConcatenated = sortAndConcat(array1, array2);
  
  // Output the results
  console.log("Even Numbers from Array1:", evenNumbers);  // [30, 60]
  console.log("Sum of Array1:", sumArray1);  // 225
  console.log("Sorted and Concatenated Arrays:", sortedAndConcatenated);  // [5, 10, 15, 20, 25, 30, 45, 50, 60, 75]
  