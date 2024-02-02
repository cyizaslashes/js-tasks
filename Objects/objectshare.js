function shareKeyValuePair(obj1, obj2) {
    
    for (let key1 in obj1) {
      // Checking if the second object has the same key
      if (key1 in obj2) {
        
        if (obj1[key1] === obj2[key1]) {
          return true; 
        }
      }
    }
    return false; 
  }
  
  // Example usage:
  const object1 = { a: 1, b: 20, c: 3 };
  const object2 = { x: 10, b: 2, y: 20 };
  
  const hasSharedPair = shareKeyValuePair(object1, object2);
  
  if (hasSharedPair) {
    console.log("The objects share at least one key-value pair.");
  } else {
    console.log("The objects do not share any key-value pair.");
  }
  