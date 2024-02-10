function countVowels(sentence: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels('Hello World')); // Output: 3 (because 'e', 'o', and 'o' are vowels)
console.log(countVowels('Typescript is awesome')); // Output: 6 (because 'y', 'p', 'e', 'i', 'a', and 'e' are vowels)
