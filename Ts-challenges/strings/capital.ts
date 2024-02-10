function capitalizeFirstLetter(sentence: string): string {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1);
        } else {
            return '';
        }
    });
    return capitalizedWords.join(' ');
}

// Example usage:
console.log(capitalizeFirstLetter('hello world')); // Output: 'Hello World'
console.log(capitalizeFirstLetter('typescript is awesome')); // Output: 'Typescript Is Awesome'
