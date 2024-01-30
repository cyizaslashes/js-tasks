function findMaxValue(numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  // Example usage:
  const numbersArray = [5, 8, 2, 10, 3];
  console.log(findMaxValue(numbersArray)); // Output: 10
  