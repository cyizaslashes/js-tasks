function objectToArray(obj) {
    const result = [];
  
    // Initialize an index variable
    let index = 0;
  
    // Iterate through the properties of the object
    for (let key in obj) {
      // Check if the property is directly on the object, not in its prototype chain
      if (obj.hasOwnProperty(key)) {
        // Assign key-value pair to the array at the current index
        result[index] = [key, obj[key]];
  
        // Increment the index for the next iteration
        index++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const myObject = { name: "Prado TXL", year:2022, brand: "Toyota" };
  
  const keyValueArray = objectToArray(myObject);
  
  console.log(keyValueArray);
  