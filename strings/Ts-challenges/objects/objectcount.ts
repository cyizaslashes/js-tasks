function countProperties(obj: object): number {
    return Object.keys(obj).length;
}

// Example usage:
const mybject = { name: 'John', age: 30, city: 'New York' };
console.log(countProperties(mybject)); // Output: 3
