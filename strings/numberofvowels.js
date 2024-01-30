function countVowels(sentence) {
  const vowels = "aeiouAEUIO";
  let vowelCount = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Example usage:
const sentence = "This is a sAmple sentence.";
const result = countVowels(sentence);
console.log(result); // Output: 8
