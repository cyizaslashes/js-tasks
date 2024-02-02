
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Example usage:
  console.log(calculateFactorial(12)); 
  console.log(calculateFactorial(0)); // Output: 1
  