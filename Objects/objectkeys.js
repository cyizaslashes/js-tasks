/*
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      // Check if the key is actually a property of the object
      // comparing the object's property to undefined
      if (obj[key] !== undefined) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  const myObject = {
    name: "John",
    age: 25,
    city: "New York",
    // Adding a property through the prototype chain
    toString: function() {
      return `${this.name}, ${this.age}, ${this.city}`;
    },
  };
  
  const numberOfProperties = countProperties(myObject);
  console.log(`Number of properties: ${numberOfProperties}`);
  */
  function countOwnProperties(obj) {
    let count = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  
  // Example usage:
  const myObject = {
    Name: "Dodge XR",
    Year: 2019,
    Brand: "Dodge",
    // Adding a property through the prototype chain
    toString: function() {
      return `${this.Name}, ${this.Year}, ${this.Brand}`;
    },
  };
  
  const numberOfProperties = countOwnProperties(myObject);
  console.log(`Number of own properties: ${numberOfProperties}`);
  