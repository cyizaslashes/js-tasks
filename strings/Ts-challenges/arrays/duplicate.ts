function removeDuplicates<T>(arr: T[]): T[] {
    const uniqueArray: T[] = [];
    for (const item of arr) {
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
}

// Example usage:
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['bugatti', 'prado', 'ferrari', 'prado', 'Range rover'])); 
