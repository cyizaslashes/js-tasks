function removeDuplicates(arr) {
    let uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      for (let j = 0; j < uniqueArray.length; j++) {
        if (arr[i] === uniqueArray[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        uniqueArray[uniqueArray.length] = arr[i];
      }
    }
  
    return uniqueArray;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 2, 3, 5];
  const newArray = removeDuplicates(originalArray);
  console.log(newArray); // Output: [1, 2, 3, 4, 5]
  