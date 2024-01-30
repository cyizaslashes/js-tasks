function shiftLeft(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const firstElement = arr[0];
  
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    arr[arr.length - 1] = firstElement;
  
    return arr;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const shiftedArray = shiftLeft(originalArray);
  console.log(shiftedArray);
  