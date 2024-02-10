function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example usage:
console.log(factorial(7)); 
console.log(factorial(0)); 
console.log(factorial(1)); 
