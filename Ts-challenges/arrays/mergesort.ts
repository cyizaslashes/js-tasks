function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
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
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSortedArrays([-5, 0, 2, 4], [-10, 1, 3, 6])); // Output: [-10, -5, 0, 1, 2, 3, 4, 6]
