function isPalindrome(str) {
 
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanedStr.length - 1; 


  while (left < right) {
   
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
   
    left++;
    right--;
  }

  
  return true;
}

// Example usage:
const testString1 = "kayak";
const testString2 = "father";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
