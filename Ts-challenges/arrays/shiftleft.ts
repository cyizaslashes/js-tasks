function shiftLeft(arr: any[]): any[] {
    if (arr.length <= 1) {
        return arr;
    }

    const firstElement = arr.shift(); 
    arr.push(firstElement); 

    return arr;
}

// Example usage:
console.log(shiftLeft([1, 2, 3, 4, 5])); // Output: [2, 3, 4, 5, 1]
console.log(shiftLeft(['a', 'b', 'c', 'd'])); // Output: ['b', 'c', 'd', 'a']
