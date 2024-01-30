function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Initialize variables for loop
  let left = 0;
  let right = cleanedStr.length - 1;

  // Check characters from both ends towards the center
  while (left < right) {
    // If characters don't match, it's not a palindrome
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    // Move to the next pair of characters
    left++;
    right--;
  }

  // If the loop completes, the string is a palindrome
  return true;
}

// Example usage:
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "Hello, World!";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
