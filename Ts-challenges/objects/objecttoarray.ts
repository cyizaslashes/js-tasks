function objectToArray(obj: object): [string, any][] {
    const keyValuePairs: [string, any][] = [];
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keyValuePairs.push([key, obj[key]]);
        }
    }
    return keyValuePairs;
}

// Example usage:
const myObject = { name: 'John', age: 30, city: 'New York' };
console.log(objectToArray(myObject));
