function reverseString(inputString) {
    let reversedString = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  
    return reversedString;
  }
  
  // Example usage:
  const originalString = "How are you";
  const reversedResult = reverseString(originalString);
  console.log(reversedResult); // output : "uoy era woH"
  