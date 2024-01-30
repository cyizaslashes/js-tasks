function capitalizeWords(sentence) {
    let result = "";
    let capitalizeNext = true;
  
    for (let char of sentence) {
      if (capitalizeNext && char !== " ") {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char;
        capitalizeNext = char === " ";
      }
    }
  
    return result;
  }
  
  // Example usage:
  const sentence = "you are young";
  const result = capitalizeWords(sentence);
  console.log(result); // Output: "You Are Young"
  