function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 4, 6, 8];
  const mergedArray = mergeSortedArrays(array1, array2);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
  