function getMaxValue(numbers: number[]): number | undefined {
    if (numbers.length === 0) {
        return undefined;
    }
    
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Example usage:
console.log(getMaxValue([3, 7, 2, 8, 1])); 
console.log(getMaxValue([])); 
