function shareAtLeastOnePair(obj1: object, obj2: object): boolean {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            return true;
        }
    }
    return false;
}

// Example usage:
const obj1 = { name: 'John', age: 30 };
const obj2 = { age: 30, city: 'New York' };
console.log(shareAtLeastOnePair(obj1, obj2)); // Output: true (because both objects share the key-value pair 'age: 30')
