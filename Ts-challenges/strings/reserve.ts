function reverseString(str: string): string {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage:
console.log(reverseString('hello')); // Output: 'olleh'
console.log(reverseString('typescript')); // Output: 'tpircsepyt'
